import { Test, TestingModule } from '@nestjs/testing';
import { LeagueController } from './league.controller';

describe('League Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LeagueController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: LeagueController = module.get<LeagueController>(LeagueController);
    expect(controller).toBeDefined();
  });
});
