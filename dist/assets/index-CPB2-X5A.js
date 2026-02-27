(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function m(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=m(a);fetch(a.href,o)}})();const g=[{id:"section-primeiro-contato",number:"01",label:"Script · Primeiro Contato",title:"Primeiro Contato<br>WhatsApp & Instagram",desc:"O objetivo é quebrar o gelo imediatamente e redirecionar o foco do preço para a dor e o desejo do paciente.",rule:"Responder em até 10 minutos · Nunca use respostas automáticas",alert:'Anti-Script — Jamais diga: "Bom dia, consultório. Pois não?" · "Qual o seu convênio?" · "Nossa triagem funciona assim..." · Jamais informe preço sem antes criar conexão.',scenarios:[{scenarioTitle:"Cenário 1: Paciente focado na dor estética",conversations:[{speaker:"patient",label:"Paciente",text:"Olá, qual o valor do implante?",avatar:"P"},{speaker:"clinic",label:"Secretária — Gancho Inicial",text:"Olá, <strong>[Nome do Paciente]</strong>! Que alegria receber seu contato 🤍 Sou a <strong>[Seu Nome]</strong>, assistente da Dra. Valéria Cabral. Como você está hoje?",avatar:"VC"},{speaker:"clinic",label:"Secretária — Diagnóstico Emocional",text:"Para que eu possa te ajudar da melhor forma possível, me conta um pouquinho: <strong>o que te incomoda no seu sorriso hoje?</strong> É uma questão estética ou de dor/função?",avatar:"VC"},{speaker:"patient",label:"Paciente responde",text:"Perdi um dente há uns meses, fica bem aparente quando sorrio...",avatar:"P"},{speaker:"clinic",label:"Secretária — Construção de Valor",text:"Entendo perfeitamente, <strong>[Nome]</strong>. A Dra. Valéria é especialista exatamente nesse [ tipo do caso ] 🦷<br><br>Ela reserva <strong>uma hora exclusiva</strong> para te ouvir pessoalmente e montar um plano 100% personalizado para você. A nossa avaliação é <strong>gratuita</strong>!<br><br>Tenho uma vaga na <strong>terça às 14h</strong> ou <strong>quinta às 10h</strong>. Qual fica melhor na sua agenda?",avatar:"VC"}]},{scenarioTitle:"Cenário 2: Paciente pergunta preço imediatamente (Price Shopper)",conversations:[{speaker:"patient",label:"Paciente",text:"Oi, qual o valor da lente de contato?",avatar:"P"},{speaker:"clinic",label:"Secretária — Quebra de Padrão",text:"Olá, <strong>[Nome]</strong>! Tudo bem? <br><br>Cada sorriso é único, e a Dra. Valéria personaliza 100% os tratamentos. Por isso, ela não trabalha com tabelas de valores genéricas.<br><br>Para te passar um plano perfeito para você, ela precisa avaliar seu caso de perto. O melhor é que a nossa avaliação é <strong>gratuita</strong>! Vamos agendar um horário para a Dra. analisar e tirar todas essas dúvidas com calma? ✨",avatar:"VC"}]},{scenarioTitle:"Cenário 3: Follow-up (Instagram)",conversations:[{speaker:"clinic",label:"Secretária — Proativa",text:"Oi, <strong>[Nome]</strong>! Como está? 🌷<br><br>Você havia entrado em contato conosco pelo Instagram — adorei receber seu contato! Para que a Dra. Valéria possa preparar algo especial para você, me conta: o que você gostaria de melhorar ou realçar no seu sorriso?",avatar:"VC"}]}],tips:[{text:'<strong>Estratégia chave:</strong> A "ponte" faz o foco sair do preço e ir para a dor/desejo. A "falsa escolha" oferece dois horários — nunca pergunte "quando você pode?". Você controla a agenda.'}],copyBtnText:"Copiar Script Completo",copyText:`Script Primeiro Contato — Dra. Valéria Cabral

CENÁRIO 1 — Gancho Inicial:
"Olá, [Nome do Paciente]! Que alegria receber seu contato 🤍 Sou a [Seu Nome], assistente da Dra. Valéria Cabral. Como você está hoje?"

CENÁRIO 2 — Price Shopper:
"Cada sorriso é único, e a Dra. Valéria personaliza 100% os tratamentos. Por isso, ela não trabalha com tabelas de valores genéricas. Para te passar um plano perfeito, ela precisa avaliar seu caso de pertinho. O melhor é que a nossa avaliação é gratuita!"

CENÁRIO 3 — Follow-up Instagram:
"Você havia entrado em contato conosco pelo Instagram — adorei receber seu contato! Para que a Dra. Valéria possa preparar algo especial para você, me conta: o que você gostaria de melhorar ou realçar?"

REGRA DE OURO: Nunca use a palavra "triagem". Nunca informe preço sem criar conexão. Responda em até 10 minutos.`},{id:"section-qualificacao",number:"02",label:"Script · Qualificação",title:"Qualificação &<br>Diagnóstico Emocional",desc:"Entenda a dor antes de oferecer a solução. Identifique o real desejo do paciente por trás do procedimento e crie uma conexão profunda.",rule:"Nunca inicie com perguntas burocráticas · Foque nos sentimentos e experiências passadas.",alert:null,scenarios:[{scenarioTitle:"Abertura para Investigação",conversations:[{speaker:"clinic",label:"Secretária — Abertura",text:"Para que a Dra. Valéria possa preparar o melhor para você, me conta um pouquinho: <strong>o que te incomoda hoje</strong> ou o que você <strong>gostaria de realçar</strong> no seu sorriso? 🌸",avatar:"VC"},{speaker:"patient",label:"Paciente",text:"Perdi um dente há uns meses, fica bem aparente quando sorrio...",avatar:"P"},{speaker:"clinic",label:"Secretária — Construção de Valor",text:"Entendo perfeitamente, <strong>[Nome]</strong>. A Dra. Valéria é especialista exatamente nesse tipo de caso.<br><br>Ela reserva <strong>uma hora exclusiva</strong> para te ouvir pessoalmente e montar um plano 100% personalizado para você. A avaliação é <strong>gratuita</strong>.",avatar:"VC"}]},{scenarioTitle:"Banco de Perguntas de Aprofundamento",conversations:[{speaker:"clinic",label:"Pergunta 1 (Experiência prévia)",text:"Você já realizou algum tratamento estético ou implante anteriormente? Como foi essa experiência? 🌷",avatar:"VC"},{speaker:"clinic",label:"Pergunta 2 (Motivação / Urgência)",text:"O que te motivou a buscar esse tratamento agora neste momento, <strong>[Nome]</strong>? Tem algum evento ou data especial chegando? ✨",avatar:"VC"},{speaker:"clinic",label:"Pergunta 3 (Pesquisa / Conhecimento)",text:"Você já pesquisou ou chegou a ver como funciona o procedimento na prática? 🤍",avatar:"VC"}]}],tips:[{text:"<strong>Estratégia chave:</strong> As respostas revelam se o paciente já teve más experiências (precisa de confiança maior), se está com pressa ou se está pesquisando preço. Molde a abordagem de acordo com essas respostas."}],copyBtnText:"Copiar Perguntas de Qualificação",copyText:`Script Qualificação — Dra. Valéria Cabral

ABERTURA:
"Para que a Dra. Valéria possa preparar o melhor para você, me conta um pouquinho: o que te incomoda hoje ou o que você gostaria de realçar no seu sorriso? 🌸"

PERGUNTAS DE APROFUNDAMENTO (use naturalmente no fluxo da conversa):
1. "Você já realizou algum tratamento estético anteriormente? Como foi essa experiência?"
2. "O que te motivou a buscar esse tratamento agora?"
3. "Você já pesquisou ou sabe algo sobre como funciona o procedimento?"
4. "Qual é o seu maior desejo em relação ao resultado que espera alcançar?"

REGRA: Faça o paciente falar sobre si mesmo. Quem pergunta, domina a conversa.`},{id:"section-objecao-preco",number:"03",label:"Script · Gestão de Objeções",title:"Objeções:<br>Preço & Convênio",desc:"Quando o paciente reage ao valor ou ao formato de atendimento. Valide a emoção, reposicione como investimento exclusivo e reafirme o diferencial.",rule:"Use 'investimento', nunca 'preço'. Para convênio, ancore no 'tempo exclusivo e longo'.",alert:null,scenarios:[{scenarioTitle:'Cenário A: "Está caro / não esperava esse valor"',conversations:[{speaker:"patient",label:"Paciente",text:"Nossa, não esperava esse valor. Está caro demais para mim.",avatar:"P"},{speaker:"clinic",label:"Secretária — Validação + Reposicionamento",text:"Entendo perfeitamente, <strong>[Nome]</strong>. Esse sentimento é muito comum quando ainda não se conhece toda a experiência que está incluída. 🤍<br><br>O investimento contempla <strong>uma hora exclusiva</strong> com a Dra. Valéria, uso de tecnologia de diagnóstico avançada e, principalmente, a segurança de um plano personalizado que evita gastos desnecessários no futuro.<br><br>Estamos falando da <strong>sua saúde e da sua autoestima</strong>, certo? A Dra. Valéria garante que cada detalhe fique exatamente como você deseja.",avatar:"VC"}]},{scenarioTitle:'Cenário B: "Vou pensar / falar com meu marido"',conversations:[{speaker:"patient",label:"Paciente",text:"Preciso falar com meu marido antes de decidir.",avatar:"P"},{speaker:"clinic",label:"Secretária — Facilitador de Decisão",text:"Com certeza, <strong>[Nome]</strong>! É uma decisão importante para a família e faz todo sentido conversarem. 💛<br><br>Para facilitar, posso te enviar um vídeo curto onde a Dra. Valéria explica a metodologia dela? Assim vocês podem assistir juntos e ele vai entender por que o nosso atendimento é tão diferenciado.<br><br>Enquanto isso, <strong>consigo reservar essa vaga por 24h</strong> para você não perder a oportunidade. Posso fazer isso?",avatar:"VC"}]},{scenarioTitle:'Cenário C: "Só quero saber o preço"',conversations:[{speaker:"patient",label:"Paciente",text:"Não precisa de tudo isso, só me passa o preço mesmo.",avatar:"P"},{speaker:"clinic",label:"Secretária — Reposicionamento Elegante",text:"Entendo sua pressa, <strong>[Nome]</strong>! 😊 Mas como a Dra. Valéria trabalha de forma integrativa e <strong>cada sorriso é único</strong>, passar um valor agora seria impreciso e até antiético da nossa parte — seu caso merece atenção real.<br><br>Ela precisa te avaliar pessoalmente para desenhar o investimento exato. Posso te ajudar a garantir um horário?",avatar:"VC"}]},{scenarioTitle:'Cenário D: "Moro muito longe / Fica fora de mão"',conversations:[{speaker:"patient",label:"Paciente",text:"Gostei muito, mas eu moro em outra cidade — fica muito fora de mão ir até a clínica.",avatar:"P"},{speaker:"clinic",label:"Secretária — Flexibilidade & Solução",text:"Entendo, <strong>[Nome]</strong>! Realmente a correria dificulta. Mas sabia que temos pacientes de várias cidades que vêm passar o dia aqui com a gente? 🌟<br><br>Para facilitar ao máximo, podemos marcar sua avaliação e, caso queira, já deixamos um <strong>tempo maior reservado</strong> para você iniciar o tratamento no mesmo dia. Assim você economiza viagens. O que acha dessa flexibilidade? 🤍",avatar:"VC"}]},{scenarioTitle:'Cenário E: "Vocês atendem por Convênio (Bradesco, Unimed)?"',conversations:[{speaker:"patient",label:"Paciente",text:"Vocês atendem pelo plano Bradesco / Unimed / Amil?",avatar:"P"},{speaker:"clinic",label:"Secretária — Ancoragem Premium + Reembolso",text:"Olá, <strong>[Nome]</strong>! 🌷<br><br>A Dra. Valéria atende de forma particular para garantir um tempo longo, exclusivo e com os melhores materiais do mercado para você.<br><br>Nós não trabalhamos diretamente com planos, mas emitimos todos os recibos e notas para que você possa <strong>pedir o reembolso</strong> no seu convênio!<br><br>Como a nossa avaliação é <strong>gratuita</strong>, seria um prazer te receber para a Dra. montar seu planejamento. Posso verificar um horário para você? 🤍",avatar:"VC"}]}],tips:[{text:"<strong>Lidando com Preço:</strong> A objeção de preço é quase sempre uma objeção de valor — o paciente ainda não enxergou o que está incluído no investimento. Jamais inicie uma argumentação baixando o preço."},{text:"<strong>Gatilho de Convênio:</strong> Ao dizer que o atendimento é particular 'PARA garantir tempo longo e exclusivo', o paciente entende que o convênio limitaria a qualidade. Isso eleva a percepção de valor."}],copyBtnText:"Copiar Scripts de Objeção",copyText:`Scripts de Objeção — Dra. Valéria Cabral

CENÁRIO A — "Está caro":
"Entendo perfeitamente, [Nome]. Esse sentimento é muito comum quando ainda não se conhece toda a experiência incluída. O investimento contempla uma hora exclusiva com a Dra. Valéria, uso de tecnologia de diagnóstico avançada e a segurança de um plano personalizado que evita gastos desnecessários no futuro."

CENÁRIO B — "Vou falar com meu marido/esposa":
"Com certeza, [Nome]! É uma decisão importante para a família. Para facilitar, posso te enviar um vídeo curto onde a Dra. Valéria explica a metodologia? Assim vocês assistem juntos. Enquanto isso, consigo reservar essa vaga por 24h para você não perder a oportunidade."

CENÁRIO C — "Só quero o preço":
"Entendo sua pressa, [Nome]! Mas como a Dra. Valéria trabalha de forma integrativa e cada sorriso é único, passar um valor agora seria impreciso e antiético da nossa parte. Ela precisa te avaliar pessoalmente."

CENÁRIO D — "Moro muito longe":
"Entendo, [Nome]! Realmente a correria dificulta. Mas sabia que temos pacientes de várias cidades? Podemos marcar sua avaliação e já deixamos um tempo maior reservado para iniciar o tratamento no mesmo dia."

CENÁRIO E — Convênio / Plano de Saúde:
"A Dra. Valéria atende de forma particular para garantir um tempo longo, exclusivo e com os melhores materiais do mercado. Não trabalhamos diretamente com planos, mas emitimos todos os recibos para você pedir o reembolso no convênio! Como a avaliação é gratuita, seria um prazer te receber."

REGRA DE OURO: Valide a emoção primeiro, contorne oferecendo solução.`},{id:"section-paciente-sumido",number:"04",label:"Script · Follow-up",title:"Paciente<br>Sumido (Ghosting)",desc:"Quando o paciente para de responder, não implore. Demonstre valor e ative o gatilho de escassez com elegância.",rule:"Sequência de 3 mensagens · Nunca suplique · Demonstre escassez",alert:null,scenarios:[{scenarioTitle:"Mensagem 1 — 24h após o silêncio",conversations:[{speaker:"clinic",label:"Secretária — Reabertura Leve",text:"Olá, <strong>[Nome]</strong>! 🤍 Ficou alguma dúvida sobre o que conversamos a respeito do seu tratamento? Estou à disposição para te ajudar.",avatar:"VC"}]},{scenarioTitle:"Mensagem 2 — 48h após o silêncio",conversations:[{speaker:"clinic",label:"Secretária — Prova Social",text:"Oi, <strong>[Nome]</strong>! Veja que incrível este resultado de um caso muito parecido com o que você busca 🦷✨<br><br><em>[Enviar foto ou vídeo de resultado real da Dra. Valéria]</em><br><br>Imagina você com esse resultado?",avatar:"VC"}]},{scenarioTitle:"Mensagem 3 — Encerramento Seletivo (gatilho de perda)",conversations:[{speaker:"clinic",label:"Secretária — Gatilho de Escassez",text:"Olá, <strong>[Nome]</strong>. Imaginei que sua semana deve estar bem corrida! 😊<br><br>Estou encerrando seu atendimento por hora no sistema para <strong>liberar a vaga para nossa lista de espera</strong>. Mas fico à disposição quando quiser retomar seu projeto de autocuidado — será um prazer te receber. 🤍",avatar:"VC"}]}],tips:[{text:'<strong>Psicologia da escassez:</strong> As pessoas reagem quando sentem que vão perder a oportunidade. O "encerrando o atendimento" ativa o medo de perda (FOMO) e gera resposta imediata em boa parte dos casos. Nunca suplique — isso rebaixa o padrão do consultório.'}],copyBtnText:"Copiar Sequência de Follow-up",copyText:`Script Paciente Sumido — Dra. Valéria Cabral

MENSAGEM 1 (24h após silêncio):
"Olá, [Nome]! 🤍 Ficou alguma dúvida sobre o que conversamos a respeito do seu tratamento? Estou à disposição para te ajudar."

MENSAGEM 2 (48h após silêncio — enviar com foto/vídeo de resultado):
"Oi, [Nome]! Veja que incrível este resultado de um caso muito parecido com o que você busca 🦷✨ [FOTO/VÍDEO] Imagina você com esse resultado?"

MENSAGEM 3 — Encerramento Seletivo (gatilho de perda):
"Olá, [Nome]. Imaginei que sua semana deve estar bem corrida! 😊 Estou encerrando seu atendimento por hora no sistema para liberar a vaga para nossa lista de espera. Mas fico à disposição quando quiser retomar seu projeto de autocuidado — será um prazer te receber. 🤍"

REGRA: Nunca suplique. A mensagem 3 ativa o gatilho de perda e frequentemente gera resposta imediata.`},{id:"section-pre-consulta",number:"05",label:"Script · Confirmação",title:"Confirmação<br>e Pré-Consulta",desc:"A consulta começa antes do paciente chegar. Crie antecipação, gere dopamina e reduza faltas com dois contatos estratégicos.",rule:"2 contatos obrigatórios · Mencione o café · Envie o mapa",alert:null,scenarios:[{scenarioTitle:"Contato 1 — 24h antes da consulta",conversations:[{speaker:"clinic",label:"Secretária — Antecipação",text:"Olá, <strong>[Nome]</strong>! Tudo pronto para te recebermos amanhã às <strong>[horário]</strong> 🌟<br><br>A Dra. Valéria já está <strong>estudando o seu caso</strong> para preparar o melhor para você. Estamos ansiosas para te conhecer!<br><br>Caso precise reagendar, contamos com um aviso com antecedência para não comprometer a qualidade do seu atendimento 🤍",avatar:"VC"}]},{scenarioTitle:"Contato 2 — Manhã da consulta",conversations:[{speaker:"clinic",label:"Secretária — Boas-vindas Antecipadas",text:"Bom dia, <strong>[Nome]</strong>! ☀️<br><br>Aqui está o mapa para facilitar sua chegada: <strong>[link Google Maps]</strong><br><br>O cappuccino já está te esperando quentinho! Até logo 🤍",avatar:"VC"}]},{scenarioTitle:"Política de cancelamento — comunicar com elegância",conversations:[{speaker:"clinic",label:"Secretária — Política de Tolerância",text:"Combinado, <strong>[Nome]</strong>! Seu espaço de uma hora com a Dra. Valéria está garantido. 🌿<br><br>Como trabalhamos com uma lista de espera, pedimos gentilmente que qualquer imprevisto seja avisado com antecedência. Temos uma tolerância de <strong>15 minutos</strong> para não comprometer a qualidade do seu atendimento.<br><br>Estamos ansiosas para te receber! ✨",avatar:"VC"}]}],tips:[{text:'<strong>Por que "a Dra. está estudando seu caso"?</strong> Essa frase ativa dois gatilhos simultaneamente: <strong>Autoridade</strong> (a doutora já dedicou tempo ao paciente) e <strong>Reciprocidade</strong> (o paciente sente que já recebeu atenção antes mesmo de chegar). Isso reduz drasticamente as faltas.'}],copyBtnText:"Copiar Scripts de Pré-Consulta",copyText:`Script Pré-Consulta — Dra. Valéria Cabral

CONTATO 1 (24h antes):
"Olá, [Nome]! Tudo pronto para te recebermos amanhã às [horário] 🌟 A Dra. Valéria já está estudando o seu caso para preparar o melhor para você. Estamos ansiosas para te conhecer! Caso precise reagendar, contamos com um aviso com antecedência para não comprometer a qualidade do seu atendimento 🤍"

CONTATO 2 (manhã da consulta):
"Bom dia, [Nome]! ☀️ Aqui está o mapa para facilitar sua chegada: [LINK GOOGLE MAPS] O cappuccino já está te esperando quentinho! Até logo 🤍"

POLÍTICA DE CANCELAMENTO:
"Combinado, [Nome]! Seu espaço de uma hora com a Dra. Valéria está garantido. 🌿 Como trabalhamos com uma lista de espera, pedimos gentilmente que qualquer imprevisto seja avisado com antecedência. Temos uma tolerância de 15 minutos para não comprometer a qualidade do seu atendimento. Estamos ansiosas para te receber! ✨"

DICA: "A Dra. está estudando seu caso" ativa autoridade + reciprocidade e reduz faltas.`},{id:"section-pos-venda",number:"06",label:"Script · Pós-Venda",title:"Pós-Venda<br>e Avaliação Google",desc:"Transforme pacientes em promotores da clínica. O cuidado pós-consulta é o que diferencia um atendimento bom de uma experiência inesquecível.",rule:"Contato obrigatório em 24h · Solicitar avaliação no momento de maior satisfação",alert:null,scenarios:[{scenarioTitle:"Contato 1 — 24h após o procedimento",conversations:[{speaker:"clinic",label:"Secretária — The Care",text:"Olá, <strong>[Nome]</strong>! 🌷<br><br>A Dra. Valéria pediu pessoalmente para eu saber: <strong>como você está se sentindo hoje?</strong> A recuperação está tranquila?<br><br>Qualquer dúvida ou desconforto, pode nos chamar a qualquer momento — estamos aqui para você! 🤍",avatar:"VC"}]},{scenarioTitle:"Contato 2 — 7 dias após (solicitar avaliação)",conversations:[{speaker:"clinic",label:"Secretária — The Ask",text:"Olá, <strong>[Nome]</strong>! Como você está, já uma semana depois? 🌟<br><br>Adoramos cuidar de você e ficamos muito felizes com o seu resultado! Se puder, sua avaliação no Google seria uma honra para nós — ela ajuda a Dra. Valéria a cuidar de mais pessoas como você 🦷✨<br><br><strong>[link para avaliação Google]</strong><br><br>Muito obrigada pela confiança! 🤍",avatar:"VC"}]},{scenarioTitle:"Contato 3 — Indicação e Fidelização (30 dias)",conversations:[{speaker:"clinic",label:"Secretária — Fidelização",text:"<strong>[Nome]</strong>, já faz um mês desde a sua consulta! 🌷 Esperamos que esteja arrasando com o resultado.<br><br>Lembre-se: se tiver alguma amiga ou familiar que também queira cuidar do sorriso, adoraríamos recebê-la com o mesmo carinho que te recebemos. <strong>Sua indicação é o maior elogio para nós!</strong> 🤍",avatar:"VC"}]}],tips:[{text:"<strong>Timing da avaliação:</strong> Solicite no <strong>momento de maior satisfação emocional</strong> — que é entre 24h e 7 dias após um resultado visível. Não peça logo após o procedimento (o paciente pode estar desconfortável) nem após muito tempo (o entusiasmo diminui)."},{text:"<strong>Lembre-se:</strong> 1 paciente perdido = valor da consulta + tratamento completo (LTV) + 5 indicações perdidas. O pós-venda não é custo — é o investimento com maior retorno da clínica."}],copyBtnText:"Copiar Scripts de Pós-Venda",copyText:`Script Pós-Venda — Dra. Valéria Cabral

CONTATO 1 (24h após procedimento — The Care):
"Olá, [Nome]! 🌷 A Dra. Valéria pediu pessoalmente para eu saber: como você está se sentindo hoje? A recuperação está tranquila? Qualquer dúvida ou desconforto, pode nos chamar a qualquer momento — estamos aqui para você! 🤍"

CONTATO 2 (7 dias — The Ask / Avaliação Google):
"Olá, [Nome]! Como você está, já uma semana depois? 🌟 Adoramos cuidar de você e ficamos muito felizes com o seu resultado! Se puder, sua avaliação no Google seria uma honra para nós — ela ajuda a Dra. Valéria a cuidar de mais pessoas como você 🦷✨ [LINK GOOGLE] Muito obrigada pela confiança! 🤍"

CONTATO 3 (30 dias — Fidelização e Indicação):
"[Nome], já faz um mês desde a sua consulta! 🌷 Esperamos que esteja arrasando com o resultado. Lembre-se: se tiver alguma amiga ou familiar que queira cuidar do sorriso, adoraríamos recebê-la com o mesmo carinho. Sua indicação é o maior elogio para nós! 🤍"

DICA: Solicite avaliação entre 24h e 7 dias após resultado visível — esse é o momento de maior satisfação emocional.`}],A="dravaleriacabral",V="script2026",h="dvc_auth";function P(){return sessionStorage.getItem(h)==="ok"}function O(){const n=document.getElementById("loginOverlay"),c=document.getElementById("loginForm"),m=document.getElementById("loginError"),t=document.getElementById("loginUser"),a=document.getElementById("loginPass"),o=document.getElementById("togglePassword");if(o&&o.addEventListener("click",()=>{const s=a.getAttribute("type")==="password"?"text":"password";a.setAttribute("type",s),o.classList.toggle("active",s==="text")}),P()){n.style.display="none";return}c.addEventListener("submit",s=>{s.preventDefault(),m.textContent="",t.classList.remove("input-error"),a.classList.remove("input-error");const b=t.value.trim(),u=a.value;b===A&&u===V?(sessionStorage.setItem(h,"ok"),n.classList.add("hidden"),n.addEventListener("animationend",()=>n.style.display="none",{once:!0})):(m.textContent="Usuário ou senha incorretos.",t.classList.add("input-error"),a.classList.add("input-error"),a.value="",a.focus())})}document.addEventListener("DOMContentLoaded",()=>{O();const n=document.getElementById("mainNav"),c=document.getElementById("mainContent"),m=document.getElementById("navCounter"),t=document.getElementById("prevBtn"),a=document.getElementById("nextBtn");let o=0;function s(){n.innerHTML=g.map((r,e)=>`
      <button 
        class="tab-btn ${e===0?"active":""}" 
        data-index="${e}"
        role="tab"
        aria-selected="${e===0}"
        aria-controls="panel-${e}"
        id="tab-${e}"
      >
        ${r.number} · ${r.label.split("·")[1].trim()}
      </button>
    `).join(""),document.querySelectorAll(".tab-btn").forEach(r=>{r.addEventListener("click",e=>{const l=parseInt(e.currentTarget.getAttribute("data-index"));u(l)})})}function b(r){const e=g[r],l=e.scenarios.map(p=>{const q=p.conversations.map(i=>{const x=i.speaker==="clinic",E=i.text.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"");`${Math.random().toString(36).slice(2,9)}`;const S=x?`
          <button
            class="bubble-copy-btn"
            data-plain-text="${encodeURIComponent(E)}"
            aria-label="Copiar mensagem"
            title="Copiar mensagem"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="bubble-copy-label">Copiar</span>
          </button>
        `:"";return`
        <div class="bubble-row ${i.speaker}">
          ${i.speaker==="patient"?`<div class="bubble-avatar">${i.avatar}</div>`:""}
          <div class="bubble-wrapper">
            <p class="bubble-label">${i.label}</p>
            <div class="bubble">${i.text}</div>
            ${S}
          </div>
          ${i.speaker==="clinic"?`<div class="bubble-avatar">${i.avatar}</div>`:""}
        </div>
      `}).join("");return`
        <div class="script-divider"><span>${p.scenarioTitle}</span></div>
        <div class="conversation">
          ${q}
        </div>
      `}).join(""),d=e.tips?e.tips.map(p=>`
      <div class="tip-box">
        <span class="tip-icon">✦</span>
        <p>${p.text}</p>
      </div>
    `).join(""):"",v=`
      <div class="script-section active" id="panel-${r}" role="tabpanel" aria-labelledby="tab-${r}">
        <div class="section-header">
          <div class="section-number">${e.number}</div>
          <div class="section-meta">
            <p class="section-label">${e.label}</p>
            <h2 class="section-title">${e.title}</h2>
            <p class="section-desc">${e.desc}</p>
          </div>
        </div>

        <div class="rule-pill">
          <div class="rule-dot"></div>
          ${e.rule}
        </div>

        ${e.alert?`
          <div class="alert-box">
            <strong>${e.alert.split("—")[0]}—</strong> ${e.alert.split("—")[1]}
          </div>
        `:""}

        ${l}

        ${d}
      </div>
    `;c.innerHTML=v,document.querySelectorAll(".bubble-copy-btn").forEach(p=>{p.addEventListener("click",C)})}function u(r){document.querySelectorAll(".tab-btn").forEach((e,l)=>{const d=l===r;e.classList.toggle("active",d),e.setAttribute("aria-selected",d),d&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}),b(r),o=r,f(),window.scrollTo({top:0,behavior:"smooth"})}function f(){m.innerHTML=`<span>${String(o+1).padStart(2,"0")}</span> / 05`,o===0?(t.disabled=!0,t.textContent="← Anterior"):(t.disabled=!1,t.textContent="← Anterior"),o===g.length-1?(a.disabled=!0,a.textContent="Concluído ✦"):(a.disabled=!1,a.textContent="Próximo →")}function C(r){const e=r.currentTarget,l=e.getAttribute("data-plain-text"),d=decodeURIComponent(l),v=e.querySelector(".bubble-copy-label");navigator.clipboard.writeText(d).then(()=>{e.classList.add("copied"),v.textContent="Copiado!",e.querySelector("svg").innerHTML=`
        <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"></polyline>
      `,setTimeout(()=>{e.classList.remove("copied"),v.textContent="Copiar",e.querySelector("svg").innerHTML=`
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        `},2200)})}t.addEventListener("click",()=>{o>0&&u(o-1)}),a.addEventListener("click",()=>{o<g.length-1&&u(o+1)}),s(),u(0)});
