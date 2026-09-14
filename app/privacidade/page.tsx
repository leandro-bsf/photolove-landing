"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 1. Estrutura dos dados em JSON da Política de Privacidade
const privacidadeData = [
  {
    id: "1",
    title: "1. Introdução",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          A Photo Love valoriza a privacidade e a proteção dos dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
        </p>
        <p>
          A Photo Love atua como provedora de tecnologia para armazenamento e compartilhamento de fotografias. O fotógrafo permanece responsável pela legalidade da coleta das imagens, obtenção dos consentimentos necessários, respeito aos direitos de imagem e cumprimento das obrigações previstas na legislação aplicável.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    title: "2. Quem é o Controlador dos Dados",
    content: (
      <div className="space-y-3 text-slate-600">
        <p className="font-semibold text-slate-900">Para fins da Lei Geral de Proteção de Dados (LGPD):</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Controlador:</strong> A Photo Love é a controladora dos dados pessoais relacionados ao cadastro dos usuários da plataforma.</li>
          <li><strong>Operadora:</strong> A Photo Love poderá atuar como operadora em relação às fotografias e demais dados tratados em nome dos fotógrafos, conforme a finalidade do serviço prestado.</li>
          <li><strong>Controlador (Fotógrafo):</strong> O fotógrafo atua como controlador dos dados pessoais de seus clientes, incluindo imagens, nomes e demais informações fornecidas.</li>
        </ul>
        <div className="mt-4 pt-3 border-t border-slate-100">
          <p className="font-semibold text-slate-900 mb-1">Identificação do Controlador:</p>
          <p><strong>Nome:</strong> Photo Love</p>
          <p><strong>E-mail:</strong> photoloveadm@gmail.com</p>
          <p><strong>Encarregado (DPO):</strong> photoloveadm@gmail.com</p>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    title: "3. Quais Dados Coletamos",
    content: (
      <div className="space-y-4 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">3.1. Dados Cadastrais:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nome completo;</li>
            <li>E-mail;</li>
            <li>Telefone;</li>
            <li>CPF (quando necessário para pagamentos);</li>
            <li>Endereço (quando necessário para faturamento).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">3.2. Dados Técnicos:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Endereço IP;</li>
            <li>Tipo de navegador e versão;</li>
            <li>Sistema operacional;</li>
            <li>Idioma e timezone;</li>
            <li>Resolução de tela;</li>
            <li>Cookies e identificadores de dispositivo;</li>
            <li>Logs de acesso e ações realizadas;</li>
            <li>URL de referência.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">3.3. Dados Financeiros:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>A Photo Love <strong>não armazena</strong> dados completos de cartões de crédito;</li>
            <li>Os pagamentos são processados por instituições especializadas (gateways de pagamento);</li>
            <li>Podemos armazenar informações de transações (data, valor, status).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">3.4. Dados de Navegação e Uso:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Páginas visitadas;</li>
            <li>Tempo de permanência;</li>
            <li>Funcionalidades utilizadas;</li>
            <li>Downloads realizados;</li>
            <li>Interações com a plataforma.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    title: "4. Finalidades do Tratamento",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cadastro e autenticação:</strong> Criar e gerenciar contas de usuários;</li>
          <li><strong>Prestação de serviços:</strong> Oferecer e aprimorar as funcionalidades da plataforma;</li>
          <li><strong>Processamento de pagamentos:</strong> Gerenciar assinaturas e transações financeiras;</li>
          <li><strong>Suporte e atendimento:</strong> Responder dúvidas, solicitações e fornecer suporte técnico;</li>
          <li><strong>Comunicações:</strong> Enviar notificações, atualizações e informações importantes sobre o serviço;</li>
          <li><strong>Segurança:</strong> Proteger a plataforma contra fraudes, acessos não autorizados e ataques;</li>
          <li><strong>Melhorias:</strong> Analisar o uso e otimizar a experiência do usuário;</li>
          <li><strong>Armazenamento de fotografias:</strong> Viabilizar a seleção, organização, compartilhamento, aprovação e download pelos usuários autorizados.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "5",
    title: "5. Bases Legais do Tratamento",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>O tratamento de dados pessoais poderá ocorrer com fundamento nas seguintes hipóteses previstas na Lei Geral de Proteção de Dados:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Execução do contrato:</strong> Para cumprir obrigações decorrentes da relação contratual com o usuário;</li>
          <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências legais ou regulatórias;</li>
          <li><strong>Legítimo interesse:</strong> Para finalidades legítimas, como segurança, prevenção a fraudes e melhorias do serviço, desde que não violem os direitos do titular;</li>
          <li><strong>Consentimento:</strong> Para finalidades específicas que exigem autorização expressa, como marketing;</li>
          <li><strong>Exercício regular de direitos:</strong> Em processos judiciais, administrativos ou arbitrais.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "6",
    title: "6. Compartilhamento de Dados",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>A Photo Love poderá compartilhar dados pessoais com:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Processadores de pagamento:</strong> Para processamento de transações financeiras;</li>
          <li><strong>Armazenamento em nuvem:</strong> Provedores de infraestrutura para hospedagem de arquivos e dados;</li>
          <li><strong>Provedores de CDN:</strong> Para entrega otimizada de conteúdo;</li>
          <li><strong>Serviços de autenticação:</strong> Para verificação de identidade;</li>
          <li><strong>Ferramentas de analytics:</strong> Para análise de uso e melhorias;</li>
          <li><strong>Ferramentas de monitoramento:</strong> Para segurança e desempenho;</li>
          <li><strong>Serviços antifraude:</strong> Para prevenção de atividades ilícitas;</li>
          <li><strong>Autoridades públicas:</strong> Em cumprimento de obrigações legais, ordens judiciais ou requisições de autoridades competentes.</li>
        </ul>
        <p className="pt-2 text-sm">
          A Photo Love exige que seus parceiros adotem medidas adequadas de proteção de dados, em conformidade com a legislação aplicável.
        </p>
      </div>
    ),
  },
  {
    id: "7",
    title: "7. Fotografias Enviadas à Plataforma",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>
          As fotografias enviadas pelos fotógrafos são armazenadas exclusivamente para viabilizar as funcionalidades contratadas da plataforma, incluindo seleção, organização, compartilhamento, aprovação e download pelos usuários autorizados.
        </p>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">7.1. Direito de Imagem:</h4>
          <p>A Photo Love <strong>não realiza análise</strong> do conteúdo das fotografias nem verifica previamente a existência de autorização para utilização da imagem das pessoas retratadas.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">7.2. Responsabilidade do Fotógrafo:</h4>
          <p className="mb-1">O fotógrafo é o único responsável por:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Obter autorização das pessoas retratadas;</li>
            <li>Garantir a legalidade do conteúdo enviado;</li>
            <li>Cumprir com as obrigações da LGPD em relação aos dados de seus clientes;</li>
            <li>Manter registros dos consentimentos obtidos, quando aplicável.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">7.3. Dados de Crianças e Adolescentes:</h4>
          <p>Quando houver tratamento de imagens envolvendo menores de idade, o fotógrafo declara possuir autorização dos responsáveis legais, nos termos do art. 14 da LGPD.</p>
        </div>
      </div>
    ),
  },
  {
    id: "8",
    title: "8. Armazenamento e Retenção de Dados",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>Os dados são armazenados pelo período necessário para cumprir as finalidades descritas nesta política, conforme abaixo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Dados cadastrais:</strong> Enquanto a conta do usuário estiver ativa;</li>
          <li><strong>Fotografias:</strong> Pelo período em que permanecerem armazenadas pelo usuário na plataforma;</li>
          <li><strong>Logs de acesso:</strong> Por até 6 (seis) meses para fins de segurança e auditoria;</li>
          <li><strong>Notas fiscais e dados fiscais:</strong> Pelo prazo legal de 5 (cinco) anos, conforme determinação da legislação tributária;</li>
          <li><strong>Dados de transações:</strong> Pelo período necessário para cumprimento de obrigações legais.</li>
        </ul>
        <p className="pt-2 text-sm">
          Após o encerramento da conta, dados fiscais e logs permanecem para cumprimento de obrigações legais, enquanto as fotografias poderão ser excluídas conforme política de retenção.
        </p>
      </div>
    ),
  },
  {
    id: "9",
    title: "9. Segurança da Informação",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>A Photo Love adota medidas técnicas e administrativas para proteger os dados pessoais dos usuários, incluindo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>HTTPS e criptografia de dados em trânsito;</li>
          <li>Autenticação e controle de acesso;</li>
          <li>Criptografia de dados em repouso;</li>
          <li>Logs de acesso e auditoria;</li>
          <li>Backups regulares;</li>
          <li>Monitoramento de segurança;</li>
          <li>Políticas de senha forte;</li>
          <li>Treinamento de equipe em segurança da informação.</li>
        </ul>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="font-semibold text-amber-900 mb-1">Importante:</p>
          <p className="text-sm text-amber-800">
            Nenhum sistema é absolutamente seguro. Embora adotemos medidas compatíveis com o estado da técnica, não podemos garantir proteção total contra ataques, acessos indevidos ou violações de segurança.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">9.1. Incidentes de Segurança:</h4>
          <p>Caso seja identificado incidente de segurança capaz de acarretar risco ou dano relevante aos titulares dos dados, a Photo Love adotará as medidas cabíveis previstas na legislação aplicável, incluindo comunicação às autoridades competentes (ANPD) e aos titulares quando necessário, nos prazos legais.</p>
        </div>
      </div>
    ),
  },
  {
    id: "10",
    title: "10. Cookies e Tecnologias Semelhantes",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>Utilizamos cookies e tecnologias semelhantes para garantir o funcionamento adequado da plataforma. Classificamos os cookies em três categorias:</p>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">10.1. Cookies Necessários:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Autenticação de login e sessão;</li>
            <li>CSRF (prevenção de ataques);</li>
            <li>Funcionalidades essenciais da plataforma.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">10.2. Cookies Estatísticos:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Analytics;</li>
            <li>Monitoramento de uso e desempenho;</li>
            <li>Análise de comportamento de navegação.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">10.3. Cookies de Marketing (quando utilizados):</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Publicidade personalizada;</li>
            <li>Remarketing;</li>
            <li>Campanhas promocionais.</li>
          </ul>
        </div>
        <p className="pt-1 text-sm">O usuário pode gerenciar suas preferências de cookies através das configurações do navegador.</p>
      </div>
    ),
  },
  {
    id: "11",
    title: "11. Transferência Internacional de Dados",
    content: (
      <div className="text-slate-600">
        <p>
          Alguns provedores utilizados pela Photo Love poderão armazenar ou processar dados em servidores localizados fora do Brasil, sendo adotadas medidas compatíveis com a legislação aplicável para proteção desses dados. Essas transferências observam as garantias previstas na LGPD, incluindo cláusulas contratuais padrão e adequação do país destinatário, quando aplicável.
        </p>
      </div>
    ),
  },
  {
    id: "12",
    title: "12. Direitos do Titular (LGPD)",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>Nos termos da Lei nº 13.709/2018 (LGPD), o titular dos dados possui os seguintes direitos, que podem ser exercidos mediante solicitação à Photo Love:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados pessoais;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor;</li>
          <li>Eliminação dos dados tratados com consentimento;</li>
          <li>Informação sobre entidades com quem compartilhamos dados;</li>
          <li>Informação sobre a possibilidade de não fornecer consentimento;</li>
          <li>Revogação do consentimento;</li>
          <li>Oposição a tratamento irregular.</li>
        </ul>
        <p className="pt-2">
          Para exercer seus direitos, entre em contato pelo e-mail: <strong className="text-slate-900">photoloveadm@gmail.com</strong>
        </p>
      </div>
    ),
  },
  {
    id: "13",
    title: "13. Serviços de Terceiros",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>
          A plataforma pode conter links ou integrações com serviços de terceiros. Cada serviço possui sua própria política de privacidade, e a Photo Love não se responsabiliza pela coleta, uso ou proteção de dados realizados por esses terceiros.
        </p>
        <p>
          Recomendamos que os usuários leiam atentamente as políticas de privacidade de qualquer serviço externo antes de fornecer seus dados.
        </p>
      </div>
    ),
  },
  {
    id: "14",
    title: "14. Alterações nesta Política",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>
          A Photo Love poderá atualizar esta Política de Privacidade periodicamente para refletir melhorias, exigências legais ou mudanças nos serviços.
        </p>
        <p>
          Quando ocorrerem alterações materiais, a data da última atualização será modificada e notificações poderão ser enviadas aos usuários por e-mail ou por meio da plataforma. O uso continuado da plataforma após a publicação das alterações implicará aceitação da nova versão da Política de Privacidade.
        </p>
      </div>
    ),
  },
  {
    id: "15",
    title: "15. Logs de Acesso e Auditoria",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>A Photo Love poderá registrar logs de acesso e ações realizadas na plataforma, incluindo:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Endereço IP;</li>
          <li>Data e hora do acesso;</li>
          <li>Tipo de navegador e dispositivo;</li>
          <li>Usuário autenticado;</li>
          <li>Ações realizadas (uploads, downloads, exclusões, etc.).</li>
        </ul>
        <p className="font-semibold text-slate-900 pt-1">Esses logs são mantidos para fins de:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Segurança da plataforma;</li>
          <li>Auditoria e conformidade;</li>
          <li>Prevenção e investigação de fraudes;</li>
          <li>Análise de incidentes.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "16",
    title: "16. Contato e Encarregado (DPO)",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade, proteção de dados ou para exercer seus direitos como titular, você pode entrar em contato:
        </p>
        <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-1 mt-2">
          <p><strong>Controlador:</strong> Photo Love</p>
          <p><strong>E-mail:</strong> photoloveadm@gmail.com</p>
          <p><strong>Encarregado (DPO):</strong> photoloveadm@gmail.com</p>
        </div>
        <p className="pt-2 text-sm">
          Responderemos às suas solicitações em até 15 (quinze) dias úteis, ou no prazo previsto pela legislação aplicável.
        </p>
      </div>
    ),
  },
];

export default function PoliticaPrivacidade() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32 px-5 md:px-8">
        <div className="mx-auto max-w-4xl">
          
          {/* Header da Página */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 shadow-sm">
              <ShieldCheck size={14} />
              <span>Privacidade & LGPD</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Esta Política de Privacidade regula a coleta, uso, armazenamento e compartilhamento de dados pessoais realizados pela Photo Love, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </div>

          {/* Renderização via .map() dos tópicos do JSON */}
          <div className="space-y-4">
            {privacidadeData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 shadow-sm ${
                    isOpen 
                      ? "border-blue-300 shadow-blue-500/5 ring-2 ring-blue-500/10" 
                      : "border-slate-200/80 hover:border-blue-200"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-base md:text-lg pr-4">
                      {item.title}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-slate-100 pt-4 text-sm md:text-base">
                            {item.content}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Rodapé de Ajuda */}
          <div className="mt-12 text-center text-xs text-slate-500">
            <p>Em caso de dúvidas sobre o tratamento de seus dados, entre em contato pelo e-mail: photoloveadm@gmail.com</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}