<svelte:head>
	<title>Políticas iNPD</title>
</svelte:head>

<style>
    .it {
        /* background-color: green; */
        margin: 1em 0;
        flex: 1;
        align-self: center;
    }

    .policy {
        margin: 2em 0;
        padding: 2em;
        border: 1px solid #ccc; 
        border-radius: 3px;
        text-align: justify;
    }

    .policy h3 {
        font-weight: 700;
        margin: 1em 0 0 0;
    }

    .policy ol {
        margin: .6em 0;
    }

    .comment {
        display: flex;
        align-items: center;
        justify-content: center;        
    }

    .comment-form {
        margin: 1em 0;
        padding: 2em;
        height: 0;
        opacity: 0;
        overflow: hidden;
        background-color: #eee;
        border: 1px solid #bbb;
        border-radius: 3px;
        transition: all .7s cubic-bezier(0, 1, 0.5, 1);
    }

    .comment-form.active {
        height: 450px;
        opacity: 1;
        overflow: visible;
    }

    /* .comment button {
        
        align-self: center;
    } */

</style>

<script>

    import _        from 'lodash'
    import * as api from '../components/api.js'

    function enableComment() {
        active = !active
    }

    function submit() {
        sending = true
        const data = _.omitBy(
            {
                target  : 'privacy_policy',
                text    : comment,
                name    : name,
                email   : email 
            }, i => i === '')
        api
            .post('/comment', data)
            .then(api.toJsonIf200)
            .then(json => {
                console.log(json)
                sending = false
                err     = false
                errors  = {}
                active  = false
                sent    = true
                name    = ''
                email   = ''
                comment = ''

                setTimeout(() => {
                    sent = false
                }, 5000)
            })
            .catch(res => {
                sending = false
                if(res.status === 400) {
                    err = 'Erros no formulário'
                    res.json().then(arr => errors = arr)
                } else {
                    err = 'Erro ao enviar'
                }
            })
    }

    let errors  = {}
    let err     = false
    let sending = false
    let sent    = false
    let active  = false
    let name    = ''
    let email   = ''
    let comment = ''

    $: label = active ? 'Cancelar' : 'Adicionar um comentário'
</script>

<div class="it">
    <div class="ui text container">
        <h1 class="ui header">Políticas iNPD</h1>
        <h2>Política de Privacidade</h2>
        <p style="text-align: justify">
            Revise e comente sobre a política de privacidade de dados do iNPD.
        </p>
    </div>

    <div class="ui text container policy">
        <h2>Instituto Nacional de Proteção de Dados – INPD</h2>
            <p>Entenda em 3 passos como tratamos seus dados:</p>
        
            <p>Após o resumo, encontra-se a íntegra da Política de Privacidade.</p>
            
            <h3>Coleta de dados</h3>
            Só coletamos os dados necessários para realização da associação ao Instituto, nada mais.
            
            <h3>Uso e compartilhamento de dados</h3>
            Em hipótese alguma o INPD compartilha os seus dados com terceiros para fins comerciais e publicitários. Nossa única fonte de receita é a anuidade pela associação e através da realização de eventos e palestras.
            
            <h3>Diretório</h3>
            Ficam disponíveis para consulta pública no próprio site, o nome dos seus associados caso tenha sido autorizado no momento da associação, segregado por Pessoa Jurídica e Pessoa Física. Não serão divulgados nenhum outro dado que não a Razão Social indicada pelo associado ou seu nome Completo. 
        
        <h3>Política de Privacidade 22 de Agosto de 2019</h3>
        
        <p>
            A presente "Política de Privacidade", conjuntamente com os Termos de Uso e demais documentos nela referenciados, tem como principais valores a transparência e a proteção à privacidade dos seus usuários e é destinada ao esclarecimento sobre a coleta, tratamento e o compartilhamento dos dados pessoais dos usuários do INPD  e de terceiros que acessem o site do Instituto.
        </p>
        <p>
            Todas as informações fornecidas pelos usuários em seu cadastro e coletadas durante o seu acesso e utilização do site serão de uso exclusivo do INPD, sendo incorporadas à sua base de dados para operacionalizar a prestação de seus serviços, ou seja, a realização de seu objeto social (fomentar a pesquisa, o debate e auxiliar a correta proteção de dados pessoais, além de viabilizar o diálogo entre titulares, empresas e Poder Público).
        </p>
        <p>
            Essa Política de Privacidade está de acordo com a legislação relativa à privacidade e proteção de dados pessoais no Brasil, tais como as leis e normas setoriais, Lei nº 12.965/2014 e o Decreto nº 8771/16, que é aplicável independentemente da localização que os usuários se encontrarem e Lei 13.709/2018. 
        </p>
        <p>
            Ao se associar, o usuário deve concordar com esta Política de Privacidade pelo qual consente de forma livre, expressa e informada para a coleta, tratamento e compartilhamento dos seus dados nos termos abaixo. Com relação aos usuários que apenas utilizem o site "INPD ", o seu consentimento decorre da mera utilização e do acesso ao site, pelo qual também autorizam a coleta, tratamento e compartilhamento de dados nos termos abaixo.
        </p>
        <p>
            Para que haja uma melhor compreensão por parte do usuário sobre as obrigações e direitos estipulados nessa Política de Privacidade, o INPD disponibiliza informações detalhadas sobre os termos técnicos e siglas referenciadas neste documento.
        </p>

        <h3>Dos dados pessoais coletados</h3>
        <ol>
            <li>As informações pessoais fornecidas pelo usuário no momento do seu cadastro para associação  ou para a simples criação de um usuário (ID), o que inclui além dos dados cadastrais, os dados necessários para o processamento de pagamento, por meio de boleto bancário, cartão de crédito e demais mecanismos de transação financeira; </li>
            <li>Os endereços de protocolo de Internet (IP), portas lógicas e características do navegador; </li>
            <li>Poderá haver a coleta automatizada de informações quando do acesso do usuário ao site do INPD, através de ferramentas como cookies que é um pequeno texto enviado ao navegador do usuário; </li>
            <li>1O usuário poderá configurar o seu navegador para que recuse os cookies e outras ferramentas de coleta automatizada de dados. No entanto, alguns recursos ou serviços disponíveis no site INPD  não funcionaram adequadamente sem tais ferramentas; </li>
            <li>Registros (logs) de acesso à aplicação, nos termos da legislação brasileira, em especial da Lei nº 12.965/14, em todo o acesso ao site do INPD, inclusive no momento do cadastro. </li>
        </ol>
        
        <h3>Do tratamento dos dados</h3>
        <ol>
            <li>Os dados coletados servem para o diagnóstico de problemas, elaboração de análises estatísticas, de segurança e combate à fraudes com a finalidade de garantir e melhorar as atividades e segurança das informações do INPD;</li>
            <li>Os dados coletados para fins de pagamento, relativos a cartões de crédito, boletos bancários e demais mecanismos de transação financeira, seguem as práticas adotadas pelas respectivas operadoras e instituições financeiras, dentro das permissões previstas na legislação vigente e relativa ao sigilo bancário;</li>
            <li>Os dados coletados através de cookies são utilizados para fins de: </li>
                <ol>
                    <li>Autenticação de um usuário no site do INPD, em particular para identificá-lo em futuros acessos (logins); </li>
                    <li>Evitar a utilização fraudulenta de credenciais e proteger os dados do usuário de terceiros não autorizados; </li>
                </ol>
            <li>Os dados das características do navegador dos usuários servem para garantir a sua compatibilidade com o site do INPD  e, assim, o uso de todas as suas funcionalidades; </li>
                <ol>
                    <li>As Pessoas Jurídicas têm o seu nome publicado, não sendo os demais dados coletados divulgados; </li>
                    <li>As Pessoas Físicas têm o seu nome  publicado, não sendo os demais dados coletados divulgados; </li>
                </ol>
            <li>Do Compartilhamento dos Dados: </li>
                <ol>
                    <li>Os dados coletados não serão, em hipótese alguma, compartilhados com terceiros para fins comerciais e publicitários; </li>
                    <li>Os dados de endereço IP, características do navegador e meio de pagamento podem ser compartilhados com instituições bancárias para o processamento de operações financeiras e para o combate a fraudes. </li>
                    <li>Estritamente para os procedimentos especificados na Lei nº 12.965/14 e no Decreto nº 8.771/16, os dados cadastrais dos usuários poderão ser fornecidos às autoridades competentes sem ordem judicial. </li>
                </ol>
            <li>Do armazenamento e padrões de segurança da informação: </li>
                <ol>
                    <li>O INPD oferece o serviço de associação através de canais ......criptografados com a adoção de Forward Secrecy, uma técnica que garante que mesmo com um comprometimento de uma chave privada as comunicações efetuadas no passado não serão comprometidas, bem como por certificado assinado; </li>
                    <li>Como padrão de segurança da informação prescrito na Legislação brasileira (Decreto nº 8771/16), o INPD mantém controle estrito, com mecanismos de autenticação, sobre o acesso aos dados de seus usuários, inclusive com a criação de inventário para assegurar a individualização do responsável pelo acesso; </li>
                    <li>Os dados coletados referidos na cláusula 1  desta "Política de Privacidade" são armazenados por tempo indeterminado, enquanto não cancelada a associação. Após o seu término ficarão arquivados pelo prazo legal e posteriormente anonimizados; </li>
                </ol>
            <li>Da exclusão dos dados: </li>
                <ol>
                    <li>As informações do usuário são mantidas enquanto atreladas a serviços ativos. Após 90 dias em que uma conta de usuário não tenha mais serviços ou créditos, não seja atualizada e não seja acessada, não haverá mais a disponibilização dos dados no Diretório. </li>
                    <li>Em observância à legislação aplicável ou cumprimento de ordem judicial, o INPD poderá manter determinados dados dos usuários por um período não inferior a 6 (seis) meses, mesmo após o seu pedido de exclusão. </li>
                </ol>
            <li>Disposições Gerais: </li>
                <ol>
                    <li>Os "Termos de Uso" e o "Contrato para associação" são parte integrante do presente documento, sendo todos eles aplicados e interpretados conjuntamente; </li>
                    <li>O INPD reserva-se o direito de alterar esta "Política de Privacidade" para adaptá-la à legislação aplicável ou às melhores práticas de Segurança da Informação, cujo texto será disponibilizado no site do Instituto; </li>
                    <li>Caso o usuário não concorde com o teor desta política, ele não deverá utilizar os serviços de associação. </li>   
                </ol>
        </ol>
    </div>

    <div class="ui text container comment">
        {#if sent}
            <div class="ui big violet label">Obrigado!</div>
        {:else}
            <button class="ui primary button " on:click={enableComment}>
                {label}
            </button>
        {/if}
    </div>
    <div class="ui text container comment-form" class:active>
        <div class="ui form">
            <div class="field" class:error={errors.name}>
                <label>Nome</label>
                <input type="text" bind:value={name} placeholder="Opcional">
            </div>        
            <div class="field" class:error={errors.email}>
                <label>Email</label>
                <input type="text" bind:value={email} placeholder="Opcional">
            </div>        
            <div class="field" class:error={errors.text}>
                <label>Comentários</label>
                <textarea rows="5" bind:value={comment}></textarea>
            </div>
            <button class="ui primary button {sending ? 'loading disabled' : ''}" on:click={submit}>Enviar</button>
            {#if err}
                <span class="ui red label">{err}</span>
            {/if}
        </div>    
    </div>

</div>

<!--

-->