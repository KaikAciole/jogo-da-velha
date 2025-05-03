"use strict";
exports.__esModule = true;
var readline = require("readline");
var JogoDaVelha = /** @class */ (function () {
    function JogoDaVelha() {
        this.readLine = readline.createInterface({ input: process.stdin, output: process.stdout });
        this.tabuleiro = Array(9).fill('');
        this.jogadorAtual = 'X';
        this.combinacoesVitoria = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
    }
    JogoDaVelha.prototype.iniciar = function () {
        console.log('Jogo da Velha (Você = X | CPU = O)');
        this.jogar();
    };
    JogoDaVelha.prototype.jogar = function () {
        var _this = this;
        this.exibirTabuleiro();
        if (this.jogadorAtual === 'X') {
            this.readLine.question("Jogador X, escolha (1-9): ", function (resposta) {
                var pos = parseInt(resposta) - 1;
                if (_this.jogadaValida(pos)) {
                    _this.tabuleiro[pos] = 'X';
                    _this.proximaJogada();
                }
                else {
                    console.log('Posição inválida. Tente novamente.');
                    _this.jogar();
                }
            });
        }
        else {
            setTimeout(function () {
                _this.jogadaCPU();
                _this.proximaJogada();
            }, 500);
        }
    };
    JogoDaVelha.prototype.jogadaValida = function (pos) {
        return pos >= 0 && pos < 9 && this.tabuleiro[pos] === '';
    };
    JogoDaVelha.prototype.jogadaCPU = function () {
        var livres = this.tabuleiro.map(function (v, i) { return v === '' ? i : -1; }).filter(function (i) { return i !== -1; });
        var pos = livres[Math.floor(Math.random() * livres.length)];
        this.tabuleiro[pos] = 'O';
    };
    JogoDaVelha.prototype.proximaJogada = function () {
        if (this.venceu()) {
            this.exibirTabuleiro();
            console.log("Jogador ".concat(this.jogadorAtual, " venceu!"));
            this.reiniciar();
        }
        else if (this.empate()) {
            this.exibirTabuleiro();
            console.log('Empate!');
            this.reiniciar();
        }
        else {
            this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
            this.jogar();
        }
    };
    JogoDaVelha.prototype.venceu = function () {
        var _this = this;
        return this.combinacoesVitoria.some(function (_a) {
            var a = _a[0], b = _a[1], c = _a[2];
            return _this.tabuleiro[a] === _this.jogadorAtual &&
                _this.tabuleiro[a] === _this.tabuleiro[b] &&
                _this.tabuleiro[a] === _this.tabuleiro[c];
        });
    };
    JogoDaVelha.prototype.empate = function () {
        return this.tabuleiro.every(function (c) { return c !== ''; });
    };
    JogoDaVelha.prototype.exibirTabuleiro = function () {
        console.log('\n');
        for (var i = 0; i < 9; i += 3) {
            console.log(" ".concat(this.mostrarCasa(i), " | ").concat(this.mostrarCasa(i + 1), " | ").concat(this.mostrarCasa(i + 2), " "));
            if (i < 6)
                console.log('---+---+---');
        }
        console.log('\n');
    };
    JogoDaVelha.prototype.mostrarCasa = function (i) {
        return this.tabuleiro[i] || (i + 1).toString();
    };
    JogoDaVelha.prototype.reiniciar = function () {
        var _this = this;
        this.readLine.question('Jogar novamente? (S/n): ', function (r) {
            if (r.trim() === '' || r.toLowerCase() === 's') {
                _this.tabuleiro = Array(9).fill('');
                _this.jogadorAtual = 'X';
                _this.jogar();
            }
            else {
                console.log('Fim de jogo.');
                _this.readLine.close();
            }
        });
    };
    return JogoDaVelha;
}());
// Rodar o jogo
new JogoDaVelha().iniciar();
