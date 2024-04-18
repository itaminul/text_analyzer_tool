import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseTextAnalyzerController } from './database-text-analyzer.controller';
import { DatabaseTextAnalyzerService } from './database-text-analyzer.service';
import { PrismaService } from '../database/prisma/prisma.service';
class MockPrismaService {}
describe('DatabaseTextAnalyzerController', () => {
  let controller: DatabaseTextAnalyzerController;
  let service: DatabaseTextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseTextAnalyzerController],
      providers: [
        DatabaseTextAnalyzerService,
        { provide: PrismaService, useClass: MockPrismaService },
      ],
    }).compile();

    controller = module.get<DatabaseTextAnalyzerController>(
      DatabaseTextAnalyzerController,
    );
    service = module.get<DatabaseTextAnalyzerService>(
      DatabaseTextAnalyzerService,
    );
  });
  it('return the total number of words', () => {
    jest.spyOn(service, 'getTotalWords');
    expect(controller.getTotalWords());
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
