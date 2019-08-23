<svelte:head>
	<title>Sobre o iNPD</title>
</svelte:head>

<script>

	let directors = [
        {   
            name   : 'Leandro Cruz', 
            title  : 'Diretor Técnico', 
            bio    : 'Empreendedor e professor, graduado em Ciência da Computação na PUC/SP, com pós-graduação em Tecnologia de Objetos no Senac/SP e cursos de extensão no exterior. Certified Scrum Master e Open Source committer. Cofundador da Oystr e Dogma (legaltech).', 
            in     : 'https://www.linkedin.com/in/leandrosaadcruz/', 
            avatar : '/directors/leandro.png' 
        },
        {   
            name   : 'Rodrigo Marques', 
            title  : 'Presidente', 
            bio    : 'DPO; Advogado, Sócio da área de Direito Digital, Tecnologia e Inovação do Marins Bertoldi Advogados; Palestrante; Professor na Pós-Graduação em Direito Digital e Tecnologia da FAE; Professor na Pós-Graduação de Compliance e Direito 4.0 da UNISOCIESC; Professor Convidado dos cursos de Proteção de Dados, Internet das Coisas e Inteligência Artificial e Ética do ITS Rio; Mestrando em Direito, Tecnologia e Sociedade pela Universidade Positivo; Formado em Processamento de Dados, Graduando em Ciência da Computação; Especialista em Direito Digital e Compliance pelo IBMEC SP; MBA em Gestão Estratégica de Empresas pela FGV; Pós-Graduado em Direito de Empresas pela PUC-Rio; Coordenador dos Grupos de Debates Permanente sobre Aspectos Legais da Internet das Coisas, Aspectos Legais da Análise de Dados e Inteligência Artificial e CyberSecurity e Compliance Digital na OAB/PR; Co-Fundador do Curitiba Legal Hackers.', 
            in     : 'https://www.linkedin.com/in/rodrigo-marques-043338124/', 
            avatar : '/directors/rodrigo.png' 
        },
        {   
            name   : 'Atílio Augusto Segantin Braga', 
            title  : 'Conselheiro Fiscal', 
            bio    : 'Graduado em Direito (Fadap-SP), com MBA Executivo em Administração de Empresas (Coppead-UFRJ), MBA em Gestão Estratégica de Pessoas (Uninter) e Pós-Graduado em Direito Material e Processual do Trabalho (Fundação Oswaldo Aranha-FOA). Realizou vários cursos no Brasil e no Exterior. É consultor nas áreas de Governança Corporativa, Compliance, Controles Internos, Gestão Integrada de Riscos e Segurança da Informação. Como Professor ministra os módulos de Gestão Integrada de Riscos, Compliance & Governança Corporativa, Responsabilidade Civil Empresarial, Direito Contratual, Ética Empresarial, Auditoria no âmbito das Licitações Públicas e Segurança da Informação. Foi Gerente Jurídico de uma grande instituição financeira nacional com mais de 19 anos de experiência no Universo Corporativo e na gestão de departamentos jurídicos, com ênfase em Controles Internos, Compliance e Governança Corporativa nas extensões regionais em que atuou.', 
            in     : 'https://www.linkedin.com/in/gerentejuridicocompliance', 
            avatar : '/directors/atilio.png' 
        },
        {   
            name   : 'Eduardo Magrani', 
            title  : 'Vice-Presidente', 
            bio    : 'Doutor (Ph.D.) e Mestre em Direito Constitucional pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio). Senior Fellow na Universidade Humboldt de Berlim, no Alexander von Humboldt Institute for Internet and Society (2017). Vice-Presidente do Instituto Nacional de Proteção de Dados (INPD). Coordenador do Instituto de Tecnologia e Sociedade do Rio de Janeiro (2017-2019). Pesquisador Associado e consultor do Centro Latam Digital, no México. Pesquisador Associado na Law Schools Global League e membro do Global Network of Internet & Society Research Centers. Professor das disciplinas de Direito e Tecnologia e Propriedade Intelectual em universidades renomadas como FGV, IBMEC, PUC-Rio e UERJ. Professor e colaborador do Instituto CESAR em Recife e do programa de Pós-Graduação Stricto Sensu em Direito – Mestrado e Doutorado – da Universidade Regional Integrada do Alto Uruguai e das Missões (URI), no Rio Grande do Sul. Pesquisador e Líder de Projetos nas áreas de E-democracia, Internet das Coisas e Tecnologias Disruptivas no Centro de Tecnologia e Sociedade da FGV (2010-2017). Bacharel em Direito pela PUC-Rio, com intercâmbio acadêmico na Universidade de Coimbra (Portugal) e Université Stendhal-Grenoble 3 (França). Advogado sócio fundador do escritório Magrani e Pragmácio Advogados e atuante nos campos de Direitos Digitais, Direito Societário e Propriedade Intelectual. Membro das Comissões de “Direito e Tecnologia da Informação”, “Ensino Jurídico” e “Aspectos Jurídicos do Empreendedorismo e das Startups” na OAB-RJ. Trabalhando desde 2008 com Regulação da Internet, Políticas Públicas, Propriedade Intelectual e Direitos Fundamentais, Magrani tem se empenhado fortemente nas discussões e processos democráticos relacionados à regulação da Internet no Brasil, participando da elaboração da primeira legislação abrangente sobre o tema: o Marco Civil da Internet. Eduardo coordenou na FGV por quatro anos o Projeto Access to Knowledge Brasil, participando das políticas de reforma da Lei de Direitos Autorais e de regulamentação da Internet no Brasil. Coordenador da Newsletter Internacional “Digital Rights: Latin America and the Caribbean”, conjuntamente com prestigiosas organizações latino-americanas (2012-2017). Autor de diversos livros e artigos na área de Direito e Tecnologia e Propriedade Intelectual,  dentre eles os livros: “Democracia Conectada” (2014), “Digital Rights: Latin America and the Caribbean” (2017); “A Internet das Coisas” (2018); e sua obra mais recente, na qual trata sobre os impactos da Inteligência artificial, “Entre Dados e Robôs: Ética e Privacidade na Era da Hiperconectividade (2019).', 
            in     : 'https://www.linkedin.com/in/eduardo-magrani-78216b21/', 
            avatar : '/directors/magrani.png' 
        },
        {   
            name   : 'Cinthia Freitas', 
            title  : 'Diretora Acadêmica e de Pesquisa', 
            bio    : 'Engenheira Civil (UFPR). Mestre em Engenharia Elétrica e Informática Industrial (UTFPR). Doutora em Informática (PUCPR). Professora Titular da Escola de Direito da PUCPR e Pesquisadora Permanente do Programa de Pós-Graduação em Direito (Mestrado e Doutorado). Coordenadora do Grupo de Estudos: “Novas Tecnologias e Sociedade Civil” na PUCPR. Perita Judicial e Assistente Técnica de diversos escritórios de advocacia em Curitiba, São Paulo, Belo Horizonte e Vitória. Consultora e Fundadora do “Direito Inteligente”. Possui patentes e softwares registrados. Publica artigos em revistas nacionais e internacionais. Orienta alunos de Graduação (TCC e PIBIC), Mestrado e Doutorado. ', 
            in     : 'https://www.linkedin.com/in/cinthia-freitas-2a246bbb/', 
            avatar : '/directors/cinthia.png' 
        },
        {   
            name   : 'Rafael Mosele', 
            title  : 'Conselheiro Fiscal', 
            bio    : 'DPO. Masters of Law (LLM) em Direito Empresarial pela Fundação Getúlio Vargas. Especialista em Direito do Trabalho pelo Centro Universitário Curitiba. Graduado em Direito pela Universidade de Passo Fundo. Sócio do escritório Célio Neto Advogados. Professor no Curso de Especialização em Direito do Trabalho da Pontifícia Universidade Católica do Paraná - PUCPR. Membro do Comitê de Relações do Trabalho do Instituto Mundo do Trabalho. Conselheiro Fiscal do Instituto Nacional de Proteção de Dados – INPD. Diretor das Relações do Trabalho do Instituto Nacional de Proteção de Dados – INPD.', 
            in     : 'http://linkedin.com/in/rafaelmosele', 
            avatar : '/directors/mosele.png' 
        },
        {   
            name   : 'Rafael Reis', 
            title  : 'Diretor Financeiro', 
            bio    : 'Advogado Especialista em Privacidade e Proteção de Dados e Professor. Coordenador do grupo permanente de discussão sobre Privacidade e Proteção de Dados e membro da Comissão de Inovação e Gestão da OAB/PR. Pós-Graduado em Direito Digital e Compliance no IBMEC. Certified Information Privacy Professional/Europe (IAPP). Atualmente cursa o programa de pós-graduação (LLM) em Direito Empresarial na FGV.', 
            in     : 'https://www.linkedin.com/in/oreis/', 
            avatar : '/directors/reis.png' 
        },
    ];
    
    $: cards = directors.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value)

</script>
<style>
    .it {
        /* background-color: green; */
        flex: 1;
        align-self: center;
    }

    .diretores {
        /* background-color: red; */
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .diretores > div.card {

    }
</style>

<div class="it">
    <div style="margin-top: 50px; margin-bottom: 30px;" class="ui text container">
        <h1 class="ui header">INPD</h1>
        <h2>Instituto Nacional de Proteção de Dados</h2>
        <p style="text-align: justify">
            Organização civil sem fins lucrativos que visa fomentar a pesquisa, o debate, auxiliar a correta proteção de dados pessoais e viabilizar o diálogo entre titulares, empresas e Poder Público.
            Patrocinamos um ambiente regulatório mais democrático e previsível, produzindo conteúdo e auxiliando a comunidade envolvida com a proteção de dados, seja ela técnica, jurídica, empresarial ou o próprio titular.
        </p>
        <a class="ui huge primary button" href="https://forms.gle/AGJqCGaAgcHk3Nf79">Associe-se <i class="right arrow icon"></i></a>
    </div>

    <div style="margin-top: 50px; margin-bottom: 30px;" class="ui text">
        <div class="ui cards diretores">
            {#each cards as c, i}
                <div class="ui raised link card">
                    <!-- <div class="image">
                        <img src="{c.avatar}" alt="{c.name}" height="100px">
                    </div> -->
                    <div class="content">
                        <a class="header" href="#">{c.name}</a>
                        <div class="meta">
                            <span class="date">{c.title}</span>
                        </div>
                        <div class="description" style="text-align: justify">
                            {c.bio.substring(0, 270) + '...'}
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="left floated author">
                            <a href="{c.in}">
                                <i class="linkedin icon"></i>
                            </a>
                        </div>
                        <div class="right floated author">
                            <img alt="{c.name}" class="ui avatar image" src="{c.avatar}">
                        </div>
                    </div>                    
                    <!-- <div class="extra content">
                        <a href="{c.in}">
                            <i class="linkedin icon"></i>
                        </a>
                    </div> -->
                </div>
            {/each}
        </div>
    </div>

</div>

<!--

-->