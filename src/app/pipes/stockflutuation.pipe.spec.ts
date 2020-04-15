import { StockflutuationPipe } from './stockflutuation.pipe';
import { StocksService } from '../services/stock/stocks.service';

describe('StockflutuationPipe', () => {
  it('create an instance', () => {
    const pipe = Object.create(StockflutuationPipe);
    expect(pipe).toBeTruthy();
  });
});
