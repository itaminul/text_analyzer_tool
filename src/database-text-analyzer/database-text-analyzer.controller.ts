import { Controller, Get, HttpStatus } from '@nestjs/common';
import { DatabaseTextAnalyzerService } from './database-text-analyzer.service';

@Controller('database-text-analyzer')
export class DatabaseTextAnalyzerController {
  constructor(
    private readonly databaseTextAnalyzerService: DatabaseTextAnalyzerService,
  ) {}
  @Get('database-get-total-words')
  async getTotalWords() {
    try {
      const results = await this.databaseTextAnalyzerService.getTotalWords();
      return {
        success: true,
        status: HttpStatus.OK,
        results: results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Get('database-get-total-charecter')
  async getTotalCharacter() {
    try {
      const results =
        await this.databaseTextAnalyzerService.getTotalCharacter();
      return {
        success: true,
        status: HttpStatus.OK,
        results: results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get('database-get-total-sentances')
  async getTotalSentences() {
    try {
      const results =
        await this.databaseTextAnalyzerService.getTotalSentences();
      return {
        success: true,
        status: HttpStatus.OK,
        results: results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Get('database-get-total-paragraph')
  async getTotalParagraph() {
    try {
      const results =
        await this.databaseTextAnalyzerService.getTotalParagraph();
      return {
        success: true,
        status: HttpStatus.OK,
        results: results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Get('database-get-longest-words')
  async getFindLongestwordsInParagraph() {
    try {
      const results =
        await this.databaseTextAnalyzerService.getFindLongestwordsInParagraph();
      return {
        success: true,
        status: HttpStatus.OK,
        results: results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
