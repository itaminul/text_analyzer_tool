import { Module } from '@nestjs/common';
import { TextAnalyzerModule } from './text-analyzer/text-analyzer.module';
import { TextAnalyzerController } from './text-analyzer/text-analyzer.controller';
import { TextAnalyzerService } from './text-analyzer/text-analyzer.service';
import { DatabaseTextAnalyzerModule } from './database-text-analyzer/database-text-analyzer.module';

@Module({
  imports: [TextAnalyzerModule, DatabaseTextAnalyzerModule],
  controllers: [TextAnalyzerController],
  providers: [TextAnalyzerService],
})
export class AppModule {}
