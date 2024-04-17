import { Module } from '@nestjs/common';
import { DatabaseTextAnalyzerService } from './database-text-analyzer.service';
import { DatabaseTextAnalyzerController } from './database-text-analyzer.controller';

@Module({
  providers: [DatabaseTextAnalyzerService],
  controllers: [DatabaseTextAnalyzerController]
})
export class DatabaseTextAnalyzerModule {}
