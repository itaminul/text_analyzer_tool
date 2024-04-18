import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class DatabaseTextAnalyzerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTotalWords(): Promise<number> {
    const sampleWords = await this.prismaService.sample.findMany({
      where: {
        activeStatus: true,
      },
      select: {
        sampleText: true,
      },
    });

    let totalWords = 0;
    for (const sampleWord of sampleWords) {
      totalWords += this.countWords(sampleWord.sampleText);
    }
    return totalWords;
  }

  async getTotalCharacter(): Promise<number> {
    const sampleWords = await this.prismaService.sample.findMany({
      where: {
        activeStatus: true,
      },
      select: {
        sampleText: true,
      },
    });
    let totalCharacters = 0;
    sampleWords.forEach((obj) => {
      if (obj.sampleText) {
        totalCharacters += obj.sampleText.length;
      }
    });
    return totalCharacters;
  }

  async getTotalSentences(): Promise<number> {
    const sentencesFromDB = await this.prismaService.sample.findMany({
      select: {
        sampleText: true,
      },
    });
    let totalSentences = 0;
    sentencesFromDB.forEach((sentence) => {
      const sentences = sentence.sampleText.split(/[.!?]+/);
      totalSentences += sentences.length;
    });
    return totalSentences;
  }
  private countWords(text: string): number {
    return text.split(/\s+/).filter((word) => word !== '').length;
  }
}
