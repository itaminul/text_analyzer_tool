import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseTextAnalyzerService } from './database-text-analyzer.service';
import { PrismaService } from '../database/prisma/prisma.service';

// Define a mock PrismaService
class MockPrismaService {
  sample = {
    findMany: jest.fn(),
  };
}

describe('YourService', () => {
  let service: DatabaseTextAnalyzerService;
  let prismaServiceMock: MockPrismaService;

  beforeEach(async () => {
    prismaServiceMock = new MockPrismaService();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DatabaseTextAnalyzerService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<DatabaseTextAnalyzerService>(
      DatabaseTextAnalyzerService,
    );
  });

  it('should return the total number of words', async () => {
    const sampleData = [{ sampleText: 'This is a sample text.' }];
    prismaServiceMock.sample.findMany.mockResolvedValue(sampleData);

    const result = await service.getTotalWords();
    expect(result).toEqual(5);
  });
});
