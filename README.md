# Sistema de Agendamentos

Esta é uma plataforma de agendamento projetada para simplificar o processo de reserva de serviços. Os usuários podem facilmente agendar datas e escolher serviços específicos, proporcionando uma experiência conveniente e personalizada. Além disso, os administradores têm a capacidade de gerenciar eficientemente esses agendamentos e os serviços oferecidos, garantindo uma organização eficaz e uma experiência fluida para todos os envolvidos

```
Atenção: O projeto foi originalmente criado em 2021 e não segue os padrões recomendados. Portanto, não deve ser utilizado de forma profissional. Este é apenas um registro do meu aprendizado em programação.
```

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

## Acesso de Administrador

```
email: adm@adm.com
senha: adm
```

## Funcionalidades

O sistema de agendamento possui as seguintes funcionalidades:

- Agendamento de serviços: Os usuários podem escolher um dia disponível e selecionar um serviço específico para agendar.
- Cadastro de serviços: Os administradores podem cadastrar novos serviços no sistema.
- Gerenciamento de agendamentos: Os administradores têm acesso a uma interface especial para visualizar e gerenciar os agendamentos realizados.
- Verificação de disponibilidade: O sistema verifica a disponibilidade dos dias e horários para garantir que não haja conflitos nos agendamentos.
- Relatórios: Os administradores tem acesso a página de relatórios com estatísticas e informações sobre os agendamentos realizados.
