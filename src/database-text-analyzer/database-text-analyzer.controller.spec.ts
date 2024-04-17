import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseTextAnalyzerController } from './database-text-analyzer.controller';

describe('DatabaseTextAnalyzerController', () => {
  let controller: DatabaseTextAnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseTextAnalyzerController],
    }).compile();

    controller = module.get<DatabaseTextAnalyzerController>(DatabaseTextAnalyzerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
