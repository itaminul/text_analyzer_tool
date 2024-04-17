import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseTextAnalyzerService } from './database-text-analyzer.service';

describe('DatabaseTextAnalyzerService', () => {
  let service: DatabaseTextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseTextAnalyzerService],
    }).compile();

    service = module.get<DatabaseTextAnalyzerService>(DatabaseTextAnalyzerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
