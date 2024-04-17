import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseTextAnalyzerService } from './database-text-analyzer.service';
import { PrismaService } from '../database/prisma/prisma.service';
class MockPrismaService {}
describe('DatabaseTextAnalyzerService', () => {
  let service: DatabaseTextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DatabaseTextAnalyzerService,
        { provide: PrismaService, useValue: MockPrismaService },
      ],
    }).compile();

    service = module.get<DatabaseTextAnalyzerService>(
      DatabaseTextAnalyzerService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
