import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalyzerService } from './text-analyzer.service';

describe('TextAnalyzerService', () => {
  let service: TextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextAnalyzerService],
    }).compile();

    service = module.get<TextAnalyzerService>(TextAnalyzerService);
  });

  it('return the total number of words', () => {
    expect(service.countWords());
  });

  it('return the total number of characters', () => {
    expect(service.countCharacters());
  });
  it('return the total number of sentences', () => {
    expect(service.countSentences());
  });
  it('return the total number of paragraphs', () => {
    expect(service.countParagraphs());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
