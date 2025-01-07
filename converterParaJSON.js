const fs = require("fs");

// Dados fornecidos
const dadosTexto = `
054.***.***-12 TÚLIO ALTOBELLI DE OLIVEIRA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 540,580
074.***.***-62 VANESSA CARNEIRO BITU Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Indeferido Inscrição no ENEM não encontrada. O(A) candidato(a) deverá informar no recurso o ano em que realizou a prova do ENEM.
017.***.***-55 VANESSA PINTO SIQUEIRA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 590,800
605.***.***-22 VINICIUS AURÉLIO MARINHO MENEZES Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 568,120
078.***.***-07 VITÓRIA ALMEIDA SANTOS Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 609,300
078.***.***-16 VITÓRIA DE SOUZA RODRIGUES Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 522,900
024.***.***-09 VITÓRIA ELLEN CABRAL DE SOUSA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 636,900
070.***.***-55 VIVIANE BATISTA SILVA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Indeferido Inscrição no ENEM não encontrada. O(A) candidato(a) deverá informar no recurso o ano em que realizou a prova do ENEM.
345.***.***-39 WELLINGTON LUIZ DO NASCIMENTO Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 440,180
083.***.***-35 WELLINGTON RODRIGUES DA COSTA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Indeferido Inscrição no ENEM não encontrada. O(A) candidato(a) deverá informar no recurso o ano em que realizou a prova do ENEM.
061.***.***-27 WELLINGTON SANTOS DE ARAÚJO Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 599,860
066.***.***-06 WESLEY SANTOS DE ARAÚJO Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 653,100
075.***.***-57 WEVERTON DA SILVA OLIVEIRA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 487,040
079.***.***-93 WILLAMY BRUNNO VIEIRA SILVA Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 566,560
060.***.***-40 YAN BRASIL ANGELIM DE BRITO Análise e Desenvolvimento de Sistemas Várzea Alegre Gerais Deferido 672,680
`;

function processarDados(dados) {
  const linhas = dados.trim().split("\n");
  return linhas.map((linha) => {
    const partes = linha.split(/\s+/);
    const cpf = partes[0];
    const nomeIndex = partes.indexOf("Análise");
    const nome = partes.slice(1, nomeIndex).join(" ");
    const curso = partes[nomeIndex + 1];
    const polo = partes[nomeIndex + 2];
    const parecer = partes.includes("Deferido");
    let nota = null;

    // Caso o parecer seja deferido, tentamos extrair a nota
    if (parecer) {
      const notaString = partes[partes.length - 1];
      nota = parseFloat(notaString.replace(",", "."));
    }

    // Caso o parecer seja indeferido, a nota não será extraída
    const motivoIndeferimento = partes.includes("Indeferido")
      ? partes.slice(partes.indexOf("Indeferido") + 1).join(" ")
      : null;

    return { cpf, nome, curso, polo, parecer, nota, motivoIndeferimento };
  });
}

const candidatos = processarDados(dadosTexto);

fs.writeFileSync("candidatos.json", JSON.stringify(candidatos, null, 2));

console.log("Arquivo candidatos.json gerado com sucesso!");

// Filtrando candidatos deferidos e indeferidos
const deferidos = candidatos.filter((candidato) => candidato.parecer);
const indeferidos = candidatos.filter((candidato) => !candidato.parecer);

// Exibindo totais
console.log(`Total de candidatos deferidos: ${deferidos.length}`);
console.log(`Total de candidatos indeferidos: ${indeferidos.length}`);

// Exibir a lista de candidatos deferidos
console.log("\nCandidatos Deferidos:");
deferidos.forEach((candidato) => {
  console.log(`${candidato.nome} - Nota: ${candidato.nota}`);
});

// Exibir a lista de candidatos indeferidos e seus motivos
console.log("\nCandidatos Indeferidos:");
indeferidos.forEach((candidato) => {
  console.log(`${candidato.nome} - Motivo: ${candidato.motivoIndeferimento}`);
});

// Ordenar candidatos deferidos pela maior para a menor nota
const deferidosOrdenados = deferidos.sort((a, b) => b.nota - a.nota);

console.log("\nCandidatos Deferidos Ordenados por Nota (Maior para Menor):");
deferidosOrdenados.forEach((candidato) => {
  console.log(`${candidato.nome} - Nota: ${candidato.nota}`);
});

const mediaDeferidos =
  deferidos.reduce((acc, candidato) => acc + candidato.nota, 0) /
  deferidos.length;
console.log(
  `\nMédia das notas dos candidatos deferidos: ${mediaDeferidos.toFixed(2)}`
);
