import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalyzerService } from './text-analyzer.service';
import { TextAnalyzerController } from './text-analyzer.controller';

describe('TextAnalyzerController', () => {
  let controller: TextAnalyzerController;
  let service: TextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextAnalyzerController],
      providers: [TextAnalyzerService],
    }).compile();

    controller = module.get<TextAnalyzerController>(TextAnalyzerController);
    service = module.get<TextAnalyzerService>(TextAnalyzerService);
  });

  it('return the total number of words', () => {
    jest.spyOn(service, 'countWords');
    expect(controller.countWords());
  });

  it('return the total number of characters', () => {
    jest.spyOn(service, 'countCharacters');
    expect(controller.countCharacters());
  });
  it('return the total number of sentences', () => {
    jest.spyOn(service, 'countSentences');
    expect(controller.countSentences());
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
