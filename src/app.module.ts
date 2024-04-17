import { Module } from '@nestjs/common';
import { TextAnalyzerModule } from './text-analyzer/text-analyzer.module';
import { TextAnalyzerController } from './text-analyzer/text-analyzer.controller';
import { TextAnalyzerService } from './text-analyzer/text-analyzer.service';
import { DatabaseTextAnalyzerModule } from './database-text-analyzer/database-text-analyzer.module';
import { DatabaseTextAnalyzerController } from './database-text-analyzer/database-text-analyzer.controller';
import { DatabaseTextAnalyzerService } from './database-text-analyzer/database-text-analyzer.service';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [PrismaModule, TextAnalyzerModule, DatabaseTextAnalyzerModule],
  controllers: [TextAnalyzerController, DatabaseTextAnalyzerController],
  providers: [TextAnalyzerService, DatabaseTextAnalyzerService],
})
export class AppModule {}
