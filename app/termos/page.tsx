"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 1. Estrutura dos dados em JSON
const termosData = [
  {
    id: "1",
    title: "1. Definições",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>Para os fins destes Termos:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Plataforma:</strong> sites, aplicativos e serviços digitais oferecidos pela Photo Love;</li>
          <li><strong>Usuário:</strong> qualquer pessoa que utilize a plataforma;</li>
          <li><strong>Fotógrafo:</strong> profissional cadastrado responsável pela criação e envio dos ensaios;</li>
          <li><strong>Cliente:</strong> pessoa que acessa fotos para visualização, aprovação e download;</li>
          <li><strong>Ensaios Fotográficos:</strong> conjunto de fotos enviadas pelos fotógrafos aos clientes;</li>
          <li><strong>Serviços:</strong> funcionalidades disponibilizadas pela Photo Love.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "2",
    title: "2. Aceitação dos Termos",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>Ao utilizar a plataforma, você declara que:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Concorda com estes Termos e Condições;</li>
          <li>Possui capacidade civil para utilizá-la ou autorização legal;</li>
          <li>Entende que a Photo Love não substitui serviços profissionais de fotografia.</li>
        </ul>
        <p className="pt-2">
          O aceite eletrônico possui validade jurídica equivalente à assinatura física, nos termos da legislação brasileira.
        </p>
      </div>
    ),
  },
  {
    id: "3",
    title: "3. Cadastro e Responsabilidades do Usuário",
    content: (
      <div className="space-y-4 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">3.1. Dados do cadastro:</h4>
          <p className="mb-2">Criar uma conta pode ser necessário para acessar determinadas funcionalidades. O usuário é responsável por:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Manter informações atualizadas;</li>
            <li>Manter sua senha confidencial;</li>
            <li>Notificar acessos não autorizados;</li>
            <li>Garantir a veracidade das informações fornecidas.</li>
          </ul>
          <p className="mt-2 text-sm">
            Toda ação realizada mediante autenticação válida será considerada realizada pelo titular da conta. O usuário deverá comunicar imediatamente qualquer suspeita de acesso indevido à sua conta.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">3.2. Uso adequado:</h4>
          <p className="mb-1">O usuário se compromete a:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Utilizar a plataforma de forma ética e legal;</li>
            <li>Não publicar conteúdos ofensivos ou ilegais;</li>
            <li>Respeitar os limites e funcionalidades da plataforma.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    title: "4. Funcionalidades da Plataforma",
    content: (
      <div className="space-y-3 text-slate-600">
        <p className="font-semibold text-slate-900">A Photo Love oferece funcionalidades como:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cadastro e organização de ensaios fotográficos;</li>
          <li>Visualização e aprovação de fotos pelo cliente;</li>
          <li>Download das fotos aprovadas.</li>
        </ul>
        <p className="font-semibold text-slate-900 pt-2">Limitações:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A Photo Love não se responsabiliza pela qualidade das fotos enviadas;</li>
          <li>Não interfere no processo de aprovação entre fotógrafo e cliente;</li>
          <li>Disputas sobre conteúdo devem ser resolvidas entre as partes.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "5",
    title: "5. Direitos e Obrigações da Photo Love",
    content: (
      <div className="space-y-4 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">5.1. Direitos da Photo Love:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Modificar ou suspender funcionalidades mediante aviso;</li>
            <li>Remover contas que violem estes Termos;</li>
            <li>Atualizar os Termos conforme necessário;</li>
            <li>Remover conteúdos ou fornecer informações quando houver determinação judicial ou obrigação legal.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">5.2. Obrigações da Photo Love:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Proteger dados pessoais conforme a Política de Privacidade;</li>
            <li>Manter a plataforma acessível, exceto em casos de manutenção ou força maior.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "6",
    title: "6. Pagamentos e Reembolsos",
    content: (
      <div className="space-y-3 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900">6.1. Pagamentos:</h4>
          <p>Algumas funcionalidades podem exigir pagamento, com condições informadas previamente ao usuário.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">6.2. Reembolsos:</h4>
          <p>Reembolsos serão analisados conforme as regras de cancelamento e processados, quando aplicável, em até 30 dias.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">6.3. Inadimplência:</h4>
          <p>A inadimplência poderá acarretar suspensão do acesso aos serviços pagos.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">6.4. Alteração de preços:</h4>
          <p>Os preços poderão ser alterados mediante comunicação prévia, produzindo efeitos apenas nas renovações futuras, salvo disposição legal em contrário.</p>
        </div>
      </div>
    ),
  },
  {
    id: "7",
    title: "7. Propriedade Intelectual",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>Todo o conteúdo da Photo Love (imagens, textos, código, logotipos etc.) pertence à plataforma ou a seus licenciantes. É proibido:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reproduzir ou distribuir conteúdo sem autorização;</li>
          <li>Utilizar a marca para fins comerciais sem consentimento;</li>
          <li>Descompilar, copiar, modificar, reproduzir ou tentar acessar o código-fonte da plataforma.</li>
        </ul>
        <p className="pt-2 text-sm">
          A remoção não autorizada de marcas d'água ou mecanismos de proteção poderá configurar violação de direitos autorais.
        </p>
      </div>
    ),
  },
  {
    id: "8",
    title: "8. Limitação de Responsabilidade",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>A Photo Love não se responsabiliza por:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Erros ou omissões em dados fornecidos por usuários;</li>
          <li>Problemas decorrentes de conexão ou serviços externos;</li>
          <li>Ações de terceiros que afetem a segurança da plataforma;</li>
          <li>Informações, arquivos ou fotos excluídos pelo próprio usuário ou por qualquer pessoa com acesso à conta;</li>
          <li>Lucros cessantes, perda de oportunidade, danos indiretos ou prejuízos decorrentes da interrupção dos serviços.</li>
        </ul>
        <p className="font-semibold text-slate-900 pt-1">Limitação financeira:</p>
        <p>Observados os limites da legislação aplicável, eventual responsabilidade da Photo Love ficará limitada ao valor efetivamente pago pelo usuário pelos serviços nos últimos 12 (doze) meses.</p>
      </div>
    ),
  },
  {
    id: "9",
    title: "9. Privacidade e LGPD",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>O uso da plataforma está sujeito à nossa Política de Privacidade. Recomendamos a leitura completa do documento.</p>
        <p className="font-semibold text-slate-900 pt-1">Para fins da Lei Geral de Proteção de Dados (LGPD):</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>O Fotógrafo atua como Controlador dos dados pessoais de seus clientes;</li>
          <li>A Photo Love atua como Operadora em relação aos dados dos clientes dos fotógrafos;</li>
          <li>A Photo Love atua como Controladora em relação aos dados dos usuários da própria plataforma.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "10",
    title: "10. Rescisão de Conta",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>A conta do usuário poderá ser suspensa ou encerrada em caso de:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Violação destes Termos;</li>
          <li>Uso inadequado da plataforma;</li>
          <li>Solicitação do próprio usuário;</li>
          <li>Inatividade por um período igual ou superior a 90 (noventa) dias, podendo a conta ser excluída permanentemente.</li>
        </ul>
        <div>
          <h4 className="font-semibold text-slate-900">10.1. Cancelamento de assinatura:</h4>
          <p>Após o cancelamento da assinatura, os arquivos poderão permanecer disponíveis por até 30 (trinta) dias, sendo posteriormente excluídos de forma definitiva.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">10.2. Exclusão definitiva:</h4>
          <p>Após a confirmação da exclusão definitiva de fotos, ensaios ou contas, os dados poderão ser removidos de forma irreversível, não sendo possível sua recuperação.</p>
        </div>
      </div>
    ),
  },
  {
    id: "11",
    title: "11. Responsabilidade do Fotógrafo",
    content: (
      <div className="space-y-3 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900">11.1. Conteúdo enviado:</h4>
          <p>O fotógrafo declara possuir todos os direitos necessários sobre os arquivos enviados e assume integral responsabilidade por seu conteúdo.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">11.2. Direitos autorais:</h4>
          <p>A Photo Love atua exclusivamente como provedora de tecnologia, não adquirindo qualquer direito autoral sobre as fotografias enviadas pelos usuários.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">11.3. Direitos de imagem:</h4>
          <p>O fotógrafo é responsável por obter todas as autorizações necessárias para utilização, armazenamento e compartilhamento das imagens.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">11.4. Menores de idade:</h4>
          <p>O fotógrafo declara possuir autorização legal dos responsáveis quando as imagens envolverem menores de idade.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">11.5. Backup e perda de fotos:</h4>
          <p>A Photo Love emprega medidas técnicas e administrativas para preservar os arquivos armazenados. Entretanto, o serviço não constitui solução exclusiva de backup profissional. O fotógrafo permanece responsável por manter cópias próprias de todas as fotografias originais. A Photo Love não garante recuperação de arquivos excluídos pelo usuário ou perdidos por eventos imprevisíveis, caso fortuito, força maior ou falhas de terceiros.</p>
        </div>
      </div>
    ),
  },
  {
    id: "12",
    title: "12. Uso Proibido da Plataforma",
    content: (
      <div className="space-y-2 text-slate-600">
        <p>É expressamente proibido utilizar a plataforma para:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Publicar ou compartilhar conteúdo pornográfico;</li>
          <li>Divulgar material terrorista ou de incitação ao ódio;</li>
          <li>Conteúdo racista, discriminatório ou ofensivo;</li>
          <li>Distribuir malware, vírus ou códigos maliciosos;</li>
          <li>Praticar phishing ou atividades fraudulentas;</li>
          <li>Enviar spam ou mensagens não solicitadas;</li>
          <li>Realizar scraping ou mineração de dados não autorizada;</li>
          <li>Utilizar robôs, crawlers ou mecanismos automatizados sem autorização expressa;</li>
          <li>Praticar engenharia reversa na plataforma;</li>
          <li>Realizar upload massivo que comprometa a infraestrutura;</li>
          <li>Atacar, invadir ou tentar comprometer a segurança da plataforma.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "13",
    title: "13. Compartilhamento de Links e Downloads",
    content: (
      <div className="space-y-3 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900">13.1. Compartilhamento de links:</h4>
          <p>O usuário é responsável pela guarda dos links privados disponibilizados pela plataforma. O compartilhamento indevido é de inteira responsabilidade do usuário.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">13.2. Downloads:</h4>
          <p>Após a disponibilização para download, o usuário é responsável por manter cópia dos arquivos obtidos. A Photo Love não se obriga a manter os arquivos após o período contratado.</p>
        </div>
      </div>
    ),
  },
  {
    id: "14",
    title: "14. Limites de Armazenamento e Compactação",
    content: (
      <div className="space-y-3 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900">14.1. Limites de armazenamento:</h4>
          <p>O usuário é responsável por respeitar o limite contratado de armazenamento. O excedente poderá acarretar cobranças adicionais ou restrições de uso.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">14.2. Compactação e otimização:</h4>
          <p>A Photo Love poderá realizar otimizações técnicas destinadas à melhoria do desempenho, preservando, sempre que possível, a qualidade dos arquivos.</p>
        </div>
      </div>
    ),
  },
  {
    id: "15",
    title: "15. Segurança e Indisponibilidade",
    content: (
      <div className="space-y-3 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900">15.1. Segurança:</h4>
          <p>Embora sejam adotadas medidas compatíveis com o estado da técnica, nenhum sistema é absolutamente inviolável. A Photo Love não garante segurança total contra ataques.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">15.2. Indisponibilidade:</h4>
          <p>A Photo Love poderá sofrer interrupções temporárias decorrentes de manutenção, atualizações ou indisponibilidade de serviços de terceiros.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">15.3. Manutenção programada:</h4>
          <p>A Photo Love poderá realizar manutenções programadas, comunicando os usuários com antecedência sempre que possível.</p>
        </div>
      </div>
    ),
  },
  {
    id: "16",
    title: "16. Serviços de Terceiros",
    content: (
      <div className="text-slate-600">
        <p>Determinadas funcionalidades dependem de serviços fornecidos por terceiros, cuja disponibilidade foge ao controle da Photo Love. A plataforma não se responsabiliza por falhas ou indisponibilidades desses serviços.</p>
      </div>
    ),
  },
  {
    id: "17",
    title: "17. Força Maior e Encerramento",
    content: (
      <div className="text-slate-600">
          <h4 className="font-semibold text-slate-900">17.1. Casos de força maior:</h4>
          <p>A Photo Love não será responsável por atrasos ou inadimplemento decorrentes de eventos fora de seu controle, incluindo, mas não se limitando a: incêndio, enchente, guerra, pandemia, apagão, indisponibilidade da internet, ataques DDoS ou falha em provedores de nuvem.</p>
          <h4 className="font-semibold text-slate-900">17.2. Encerramento da plataforma:</h4>
          <p>Em caso de encerramento definitivo das atividades, os usuários serão comunicados com antecedência razoável para que possam realizar o download dos dados disponíveis, ressalvadas hipóteses de impossibilidade técnica ou determinação legal.</p>
       
         </div>
    ),
  },

  {
    id: "18",
    title: "18. Foro e Legislação Aplicável",
    content: (
      <div className="text-slate-600">
       
          <p>Este contrato é regido pelas leis brasileiras, e eventuais controvérsias serão resolvidas no foro da comarca de sua escolha. </p>
         </div>
    ),
  },
];

export default function TermosServico() {
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
              <FileText size={14} />
              <span>Legal</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Termos e Condições de Uso
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Bem-vindo à Photo Love! Estes Termos e Condições regulam o uso de nossa plataforma e dos nossos serviços. Ao acessar ou utilizar a Photo Love, você concorda integralmente com os termos aqui estabelecidos.
            </p>
          </div>

          {/* Renderização via .map() dos tópicos do JSON */}
          <div className="space-y-4">
            {termosData.map((term, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={term.id}
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
                      {term.title}
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
                            {term.content}
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
            <a> Data da última atualização: 20/07/2026 </a>
            <p>Caso tenha dúvidas sobre estes termos, entre em contato com nossa equipe de suporte.</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}