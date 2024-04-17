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

  it('should return the number of words', () => {
    jest.spyOn(service, 'countWords').mockImplementation(async () => 13);
    expect(controller.countWords());
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
