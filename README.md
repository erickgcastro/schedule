# Projeto de Sistema de Agendamento

Este é um projeto de um sistema de agendamento, onde as pessoas podem agendar um dia e escolher um serviço específico. Além disso, o sistema permite que administradores gerenciem esses agendamentos e os serviços.

## Executando o Projeto Localmente

Para executar o projeto localmente em sua máquina, siga as etapas abaixo:

### Pré-requisitos

- Ter o Docker em sua máquina antes de prosseguir.
- Certifique-se de ter as portas 3000 e 5000 livres em sua máquina antes de prosseguir.

### Passos

1. Clone o repositório do projeto para o seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/erickgcastro/schedule.git
   ```

2. Navegue até o diretório raiz do projeto;

3. Inicie o projeto usando o Docker Compose:

   ```bash
   docker compose up
   ```

   Isso iniciará os contêineres necessários para executar o frontend e o backend da plataforma;

4. Após o processo de inicialização ser concluído, você poderá acessar a plataforma em seu navegador web através do seguinte endereço:

   ```bash
   http://localhost:3000
   ```

## Funcionalidades

O sistema de agendamento possui as seguintes funcionalidades:

- Agendamento de serviços: Os usuários podem escolher um dia disponível e selecionar um serviço específico para agendar.
- Cadastro de serviços: Os administradores podem cadastrar novos serviços no sistema.
- Gerenciamento de agendamentos: Os administradores têm acesso a uma interface especial para visualizar e gerenciar os agendamentos realizados.
- Verificação de disponibilidade: O sistema verifica a disponibilidade dos dias e horários para garantir que não haja conflitos nos agendamentos.
- Relatórios: Os administradores tem acesso a página de relatórios com estatísticas e informações sobre os agendamentos realizados.
