// components/JogoDaVelha.ts
type Jogador = 'X' | 'O';
type Celula = '' | Jogador;

export default class JogoDaVelha {
  private tabuleiro: Celula[][];
  private jogadorAtual: Jogador;
  private vencedor: Jogador | null;
  private placar: { X: number; O: number };

  constructor() {
    this.tabuleiro = this.criarTabuleiroVazio();
    this.jogadorAtual = 'X';
    this.vencedor = null;
    this.placar = { X: 0, O: 0 };
  }

  private criarTabuleiroVazio(): Celula[][] {
    return [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  public getTabuleiro(): Celula[][] {
    return this.tabuleiro;
  }

  public getJogadorAtual(): Jogador {
    return this.jogadorAtual;
  }

  public getVencedor(): Jogador | null {
    return this.vencedor;
  }

  public getPlacar(): { X: number; O: number } {
    return this.placar;
  }

  public jogar(linha: number, coluna: number): boolean {
    if (this.vencedor || this.tabuleiro[linha][coluna] !== '') {
      return false;
    }

    this.tabuleiro[linha][coluna] = this.jogadorAtual;
    const vencedor = this.checarVencedor();

    if (vencedor) {
      this.vencedor = vencedor;
      this.placar[vencedor]++;
    } else {
      this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
    }

    return true;
  }

  private checarVencedor(): Jogador | null {
    const t = this.tabuleiro;

    for (let i = 0; i < 3; i++) {
      if (t[i][0] && t[i][0] === t[i][1] && t[i][0] === t[i][2]) {
        return t[i][0];
      }

      if (t[0][i] && t[0][i] === t[1][i] && t[0][i] === t[2][i]) {
        return t[0][i];
      }
    }

    if (t[0][0] && t[0][0] === t[1][1] && t[1][1] === t[2][2]) {
      return t[0][0];
    }

    if (t[0][2] && t[0][2] === t[1][1] && t[1][1] === t[2][0]) {
      return t[0][2];
    }

    return null;
  }

  public reiniciar(): void {
    this.tabuleiro = this.criarTabuleiroVazio();
    this.jogadorAtual = 'X';
    this.vencedor = null;
  }
}
