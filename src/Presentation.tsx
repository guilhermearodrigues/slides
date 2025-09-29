import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Truck, Clock, DollarSign, AlertCircle, CheckCircle, Zap, BarChart3, Shield } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      title: "Automação Inteligente para Transportadoras",
      subtitle: "Transforme processos manuais em eficiência operacional com RPA",
      icon: <Truck className="w-24 h-24 text-blue-600" />,
      content: (
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="flex justify-center">
            <Truck className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 px-2">Automação Inteligente</h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 px-2">para Transportadoras</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-4 sm:mt-8 px-4">
            Reduza custos, elimine erros e acelere suas operações com Power Automate
          </p>
        </div>
      )
    },
    {
      title: "Os Desafios do Setor de Transporte",
      content: (
        <div className="space-y-4 sm:space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 px-2">Desafios Operacionais Diários</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-red-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-3 sm:gap-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Processos Manuais Lentos</h3>
                  <p className="text-sm sm:text-base text-gray-600">Horas gastas em lançamentos de notas fiscais, conferência de documentos e atualização de sistemas</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Erros Humanos</h3>
                  <p className="text-sm sm:text-base text-gray-600">Digitação incorreta de dados, divergências entre sistemas e retrabalho constante</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-start gap-3 sm:gap-4">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Custos Operacionais Altos</h3>
                  <p className="text-sm sm:text-base text-gray-600">Equipe sobrecarregada com tarefas repetitivas que não agregam valor estratégico</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3 sm:gap-4">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Falta de Visibilidade</h3>
                  <p className="text-sm sm:text-base text-gray-600">Dificuldade em rastrear processos e obter relatórios em tempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "O Que é RPA?",
      content: (
        <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 px-2">Robotic Process Automation</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 rounded-xl border border-blue-200">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              RPA é uma tecnologia que utiliza <strong className="text-blue-700">robôs de software</strong> para automatizar tarefas repetitivas,
              imitando ações humanas em sistemas digitais. Com Power Automate, você cria fluxos inteligentes que trabalham
              <strong className="text-blue-700"> 24/7 sem erros</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Rápido</h3>
              <p className="text-sm sm:text-base text-gray-600">Executa tarefas em segundos</p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Preciso</h3>
              <p className="text-sm sm:text-base text-gray-600">Zero erros de digitação</p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Confiável</h3>
              <p className="text-sm sm:text-base text-gray-600">Funciona 24/7 sem parar</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Processos que Podemos Automatizar",
      content: (
        <div className="space-y-4 sm:space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 px-2">Cases de Automação</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">📄 Gestão de Notas Fiscais</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Extração automática de dados de NF-e, lançamento no sistema ERP e envio de notificações</p>
              <p className="text-xs sm:text-sm text-blue-600 font-semibold">⏱️ Economia: 85% do tempo</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">📦 Rastreamento de Entregas</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Atualização automática de status, envio de e-mails aos clientes e integração com múltiplos sistemas</p>
              <p className="text-xs sm:text-sm text-green-600 font-semibold">⏱️ Economia: 90% do tempo</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">💰 Gestão Financeira</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Conciliação bancária, conferência de pagamentos e geração de relatórios automáticos</p>
              <p className="text-xs sm:text-sm text-purple-600 font-semibold">⏱️ Economia: 75% do tempo</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">👥 Gestão de Motoristas</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Controle de jornada, validação de documentos e alertas de vencimento</p>
              <p className="text-xs sm:text-sm text-orange-600 font-semibold">⏱️ Economia: 80% do tempo</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">📊 Relatórios Gerenciais</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Consolidação de dados de múltiplas fontes e envio automático de dashboards</p>
              <p className="text-xs sm:text-sm text-red-600 font-semibold">⏱️ Economia: 95% do tempo</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Benefícios Mensuráveis",
      content: (
        <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 px-2">ROI Comprovado</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 sm:p-8 rounded-xl text-white shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">70%</div>
              <div className="text-base sm:text-lg md:text-xl">Redução de custos operacionais</div>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 sm:p-8 rounded-xl text-white shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">85%</div>
              <div className="text-base sm:text-lg md:text-xl">Redução de erros manuais</div>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 sm:p-8 rounded-xl text-white shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">3-6</div>
              <div className="text-base sm:text-lg md:text-xl">Meses para ROI positivo</div>
            </div>

            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 sm:p-8 rounded-xl text-white shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">24/7</div>
              <div className="text-base sm:text-lg md:text-xl">Operação contínua sem pausas</div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200 mt-4 sm:mt-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              <strong>Exemplo prático:</strong> Uma transportadora que processa 500 notas fiscais/dia consegue reduzir
              o tempo de processamento de 3 minutos para 30 segundos por nota, liberando 20 horas/dia da equipe
              para atividades estratégicas.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Power Automate na Prática",
      content: (
        <div className="space-y-4 sm:space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 px-2">Como Funciona</h2>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 sm:p-6 md:p-8 rounded-xl text-white mb-4 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Fluxo de Automação: Nota Fiscal</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">1</div>
                <p className="text-sm sm:text-base md:text-lg">E-mail com NF-e chega na caixa de entrada</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">2</div>
                <p className="text-sm sm:text-base md:text-lg">Robô extrai automaticamente os dados (valor, CNPJ, itens)</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">3</div>
                <p className="text-sm sm:text-base md:text-lg">Valida informações e cruza com banco de dados</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">4</div>
                <p className="text-sm sm:text-base md:text-lg">Lança dados no sistema ERP automaticamente</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">5</div>
                <p className="text-sm sm:text-base md:text-lg">Envia notificação de conclusão para o gestor</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-green-100 p-3 sm:p-4 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-700">5min</div>
              <div className="text-xs sm:text-sm text-gray-600">Processo Manual</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl sm:text-4xl text-gray-400">→</div>
            </div>
            <div className="bg-blue-100 p-3 sm:p-4 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700">30seg</div>
              <div className="text-xs sm:text-sm text-gray-600">Com Automação</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Por Que Power Automate?",
      content: (
        <div className="space-y-4 sm:space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 px-2">Vantagens da Plataforma</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">✅ Integração Total</h3>
              <p className="text-sm sm:text-base text-gray-600">Conecta com mais de 400 aplicativos nativamente: Excel, Outlook, ERP, sistemas legados, APIs e muito mais</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">🔧 Sem Programação</h3>
              <p className="text-sm sm:text-base text-gray-600">Interface visual intuitiva, permitindo que sua equipe crie e modifique fluxos sem conhecimento técnico avançado</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">☁️ Nuvem e Desktop</h3>
              <p className="text-sm sm:text-base text-gray-600">Automatize processos na nuvem e também no desktop, interagindo com sistemas Windows e aplicações locais</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">🔒 Segurança Microsoft</h3>
              <p className="text-sm sm:text-base text-gray-600">Conformidade com LGPD, criptografia de ponta a ponta e controle total de acessos e permissões</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">📈 Escalável</h3>
              <p className="text-sm sm:text-base text-gray-600">Comece pequeno e expanda conforme necessário, sem limites de processos automatizados</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">💰 Custo-Benefício</h3>
              <p className="text-sm sm:text-base text-gray-600">Investimento acessível com retorno rápido, muito mais econômico que contratar equipe adicional</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Roadmap de Implementação",
      content: (
        <div className="space-y-4 sm:space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 px-2">Como Começamos</h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Diagnóstico (1 semana)</h3>
                <p className="text-sm sm:text-base text-gray-600">Mapeamos seus processos atuais, identificamos gargalos e priorizamos oportunidades de automação com maior ROI</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Projeto Piloto (2-3 semanas)</h3>
                <p className="text-sm sm:text-base text-gray-600">Implementamos a primeira automação em um processo de alto impacto, gerando resultados rápidos e comprovando valor</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Expansão (4-8 semanas)</h3>
                <p className="text-sm sm:text-base text-gray-600">Escalamos para outros processos conforme prioridade, construindo um ecossistema de automações integradas</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Capacitação e Suporte</h3>
                <p className="text-sm sm:text-base text-gray-600">Treinamos sua equipe para manter e criar novas automações, garantindo autonomia e evolução contínua</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200 mt-4 sm:mt-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              <strong>Prazo total:</strong> Primeiros resultados em 2-3 semanas. Transformação completa em 2-3 meses.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Próximos Passos",
      content: (
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">Vamos Começar?</h2>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 sm:p-8 md:p-12 rounded-xl text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8">Proposta para Início Imediato</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-white/20 p-4 sm:p-6 rounded-lg">
                <div className="text-3xl sm:text-4xl font-bold mb-2">1</div>
                <p className="text-sm sm:text-base md:text-lg">Reunião de diagnóstico gratuita</p>
              </div>
              <div className="bg-white/20 p-4 sm:p-6 rounded-lg">
                <div className="text-3xl sm:text-4xl font-bold mb-2">2</div>
                <p className="text-sm sm:text-base md:text-lg">Análise de viabilidade técnica</p>
              </div>
              <div className="bg-white/20 p-4 sm:p-6 rounded-lg">
                <div className="text-3xl sm:text-4xl font-bold mb-2">3</div>
                <p className="text-sm sm:text-base md:text-lg">Proposta personalizada</p>
              </div>
            </div>

            <div className="text-base sm:text-lg md:text-2xl font-semibold mb-4 sm:mb-6 px-2">
              🎯 Sem compromisso | 🚀 Setup rápido | 💡 Resultados mensuráveis
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-yellow-50 p-4 sm:p-6 rounded-lg border-2 border-yellow-300">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
              📞 Entre em contato hoje e comece a economizar tempo e dinheiro já nas próximas semanas!
            </p>
          </div>

          <div className="text-gray-600 mt-6 sm:mt-8 md:mt-12 px-4">
            <p className="text-sm sm:text-base md:text-lg">Dúvidas? Estamos prontos para responder todas as suas questões.</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next slide
      if (currentSlide < slides.length - 1) {
        nextSlide();
      }
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - previous slide
      if (currentSlide > 0) {
        prevSlide();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
          {/* Slide Content */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-y-auto">
            {slides[currentSlide].content}
          </div>
          
          {/* Navigation */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 sm:p-4 md:p-6 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="bg-white text-blue-600 p-2 sm:p-3 rounded-full hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              disabled={currentSlide === 0}
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                {currentSlide + 1}/{slides.length}
              </span>
              <div className="flex gap-1 sm:gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 sm:h-3 rounded-full transition-all touch-manipulation ${
                      index === currentSlide
                        ? 'bg-white w-6 sm:w-8'
                        : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="bg-white text-blue-600 p-2 sm:p-3 rounded-full hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              disabled={currentSlide === slides.length - 1}
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-3 sm:mt-6 text-center text-gray-600 px-4">
          <p className="text-xs sm:text-sm">
            <span className="hidden sm:inline">Use as setas ou clique nos pontos para navegar</span>
            <span className="sm:hidden">Deslize ou use as setas para navegar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;