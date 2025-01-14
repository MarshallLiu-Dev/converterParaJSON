# Processamento de Dados de Candidatos

## Descrição do Projeto

O projeto tem como objetivo processar e organizar os dados de candidatos a partir de um texto bruto extraído de um documento PDF, estruturando as informações em um formato mais legível e manipulável. Os dados dos candidatos são analisados e transformados em um arquivo JSON contendo informações como CPF, nome, curso, polo de estudo, parecer (Deferido ou Indeferido) e, no caso de parecer \
Deferido\, a nota obtida.

Além de realizar essa transformação, o projeto também calcula a média das notas dos candidatos que foram aprovados (Deferidos), e exibe a quantidade total de candidatos deferidos e indeferidos, oferecendo uma visão mais clara dos resultados.

## Funcionalidades Principais

- **Processamento de Dados**: O projeto recebe uma string com os dados dos candidatos em formato de texto e converte esses dados em objetos JavaScript. Cada candidato é representado por um objeto contendo o CPF, nome, curso, polo, parecer (Deferido ou Indeferido) e nota (para candidatos deferidos).

- **Geração de Arquivo JSON**: Depois de processar os dados, o projeto grava os resultados em um arquivo candidatos.json, que contém a lista de candidatos em formato JSON. Esse arquivo pode ser usado para outras análises ou manipulações de dados.

- **Cálculo de Média**: Para os candidatos com parecer \Deferido\, é calculada a média das notas. Essa informação é exibida no terminal, fornecendo uma visão sobre o desempenho médio dos candidatos aprovados.

- **Contagem de Deferidos e Indeferidos**: O projeto também conta e exibe o número de candidatos com parecer \Deferido\ e \Indeferido\, proporcionando uma visão geral do número de candidatos aprovados e reprovados no processo seletivo.

## Público-Alvo

Este projeto pode ser útil para instituições de ensino, organizadores de processos seletivos ou qualquer organização que precise analisar rapidamente resultados de candidatos com base em uma lista de dados simples, extraída de documentos como PDFs ou outros arquivos de texto.

## Benefícios

- **Automação**: O projeto automatiza o processamento de dados de candidatos, eliminando a necessidade de fazer esse trabalho manualmente, o que economiza tempo e reduz erros humanos.

- **Análise Rápida**: Com a média das notas e a contagem de deferidos e indeferidos, o projeto fornece uma maneira rápida de avaliar os resultados do processo seletivo.

- **Exportação de Dados**: O arquivo JSON gerado pode ser facilmente integrado a outras ferramentas de análise de dados ou sistemas de gerenciamento, facilitando o uso das informações processadas.

## Instruções de Uso

1. **Clonando o repositório**:
    `
    git clone https://github.com/MarshallLiu-Dev/converterParaJSON
    `

2. **Instalando Dependências**:
    Certifique-se de ter o Node.js instalado e, em seguida, instale as dependências do projeto:
    `
    npm install
    `

3. **Processando os Dados**:
    Após configurar o projeto, você pode rodar o script para processar os dados dos candidatos. A entrada de dados deve ser fornecida como um texto no formato especificado.

    Execute o comando:
    `
    node processarDados.js
    `

4. **Arquivo de Saída**:
    O script gerará um arquivo candidatos.json com os dados dos candidatos processados.

## Contribuições

Contribuições são bem-vindas! Se você tem sugestões, melhorias ou correções, por favor, crie um fork do repositório e envie um pull request.



