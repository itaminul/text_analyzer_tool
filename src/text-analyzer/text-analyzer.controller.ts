import { Controller, Get, HttpStatus } from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';

@Controller('text-analyzer')
export class TextAnalyzerController {
  constructor(private readonly textAnalyserService: TextAnalyzerService) {}
  @Get('words')
  async countWords() {
    try {
      const results = await this.textAnalyserService.countWords();
      return {
        success: true,
        status: HttpStatus.OK,
        results: `Total ${results} Words`,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get('characters')
  async countCharacters() {
    try {
      const results = await this.textAnalyserService.countCharacters();
      return {
        success: true,
        status: HttpStatus.OK,
        results: `Total ${results} Characters`,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Get('sentences')
  async countSentences() {
    try {
      const results = await this.textAnalyserService.countSentences();
      return {
        success: true,
        status: HttpStatus.OK,
        results: `Total ${results} Sentences`,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Get('paragraph')
  async countParagraphs() {
    try {
      const results = await this.textAnalyserService.countParagraphs();
      return {
        success: true,
        status: HttpStatus.OK,
        results: `Total ${results} Paragraph`,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Get('long-words')
  async findLongestWordsInParagraphs() {
    try {
      const results =
        await this.textAnalyserService.findLongestWordsInParagraphs();
      return {
        success: true,
        status: HttpStatus.OK,
        results: `${results} is the long words in the paragraphs`,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
