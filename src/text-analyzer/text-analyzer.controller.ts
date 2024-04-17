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
}
