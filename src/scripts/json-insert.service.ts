// json-insert.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import * as fs from 'fs/promises';
import { join } from 'path';

@Injectable()
export class JsonInsertService {
  private readonly sampleFilePath: string;
  constructor(private readonly prismaService: PrismaService) {
    this.sampleFilePath = join(process.cwd(), 'src', 'json-data.json');
  }
  async insertJsondataFromFile(filePath: string) {
    try {
      const jsonData = JSON.parse(
        await fs.readFile(this.sampleFilePath, 'utf-8'),
      );
      console.log('jsonData', jsonData);
      for (const data of jsonData) {
        await this.prismaService.sample.create({
          data: {
            sampleText: data.sampleText,
          },
        });
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new NotFoundException('Sample file not found.');
      }
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
