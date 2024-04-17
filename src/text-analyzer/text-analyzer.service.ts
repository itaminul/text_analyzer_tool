import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs/promises';
import { join } from 'path';

@Injectable()
export class TextAnalyzerService {
  private readonly sampleFilePath: string;

  constructor() {
    this.sampleFilePath = join(process.cwd(), 'src', 'sample.txt');
  }

  async countWords() {
    try {
      const words = await fs.readFile(this.sampleFilePath, 'utf-8');
      const results = words.split(/\s+/).length;
      return results;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new NotFoundException('Sample file not found.');
      }
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  async countCharacters() {
    try {
      const text = await fs.readFile(this.sampleFilePath, 'utf-8');
      const results = text.length;
      return results;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new NotFoundException('Sample file not found.');
      }
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
