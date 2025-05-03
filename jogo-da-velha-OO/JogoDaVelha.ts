import * as readline from 'readline';

class JogoDaVelha {

  private readLine = readline.createInterface({ input: process.stdin, output: process.stdout });
  private tabuleiro: ('' | 'X' | 'O')[] = Array(9).fill('');
  private jogadorAtual: 'X' | 'O' = 'X';
  private combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  iniciar() {
    console.log('Jogo da Velha (Você = X | CPU = O)');
    this.jogar();
  }

  private jogar() {
    this.exibirTabuleiro();
    if (this.jogadorAtual === 'X') {
      this.readLine.question(`Jogador X, escolha (1-9): `, (resposta) => {
        const pos = parseInt(resposta) - 1;
        if (this.jogadaValida(pos)) {
          this.tabuleiro[pos] = 'X';
          this.proximaJogada();
        } else {
          console.log('Posição inválida. Tente novamente.');
          this.jogar();
        }
      });
    } else {
      setTimeout(() => {
        this.jogadaCPU();
        this.proximaJogada();
      }, 500);
    }
  }

  private jogadaValida(pos: number): boolean {
    return pos >= 0 && pos < 9 && this.tabuleiro[pos] === '';
  }

  private jogadaCPU() {
    const livres = this.tabuleiro.map((v, i) => v === '' ? i : -1).filter(i => i !== -1);
    const pos = livres[Math.floor(Math.random() * livres.length)];
    this.tabuleiro[pos] = 'O';
  }

  private proximaJogada() {
    if (this.venceu()) {
      this.exibirTabuleiro();
      console.log(`Jogador ${this.jogadorAtual} venceu!`);
      this.reiniciar();
    } else if (this.empate()) {
      this.exibirTabuleiro();
      console.log('Empate!');
      this.reiniciar();
    } else {
      this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
      this.jogar();
    }
  }

  private venceu(): boolean {
    return this.combinacoesVitoria.some(([a, b, c]) =>
      this.tabuleiro[a] === this.jogadorAtual &&
      this.tabuleiro[a] === this.tabuleiro[b] &&
      this.tabuleiro[a] === this.tabuleiro[c]
    );
  }

  private empate(): boolean {
    return this.tabuleiro.every(c => c !== '');
  }

  private exibirTabuleiro() {
    console.log('\n');
    for (let i = 0; i < 9; i += 3) {
      console.log(` ${this.mostrarCasa(i)} | ${this.mostrarCasa(i + 1)} | ${this.mostrarCasa(i + 2)} `);
      if (i < 6) console.log('---+---+---');
    }
    console.log('\n');
  }

  private mostrarCasa(i: number): string {
    return this.tabuleiro[i] || (i + 1).toString();
  }

  private reiniciar() {
    this.readLine.question('Jogar novamente? (S/n): ', (r) => {
    if (r.trim() === '' || r.toLowerCase() === 's') {
        this.tabuleiro = Array(9).fill('');
        this.jogadorAtual = 'X';
        this.jogar();
      } else {
        console.log('Fim de jogo.');
        this.readLine.close();
      }
    });
  }
}

new JogoDaVelha().iniciar();
