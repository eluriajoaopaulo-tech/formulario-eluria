import React from "react";
import { useFormContext } from "react-hook-form";
import { BriefingFormData } from "../../types/form";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Label } from "../ui/Label";
import { motion } from "framer-motion";

export const SectionPersona: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<BriefingFormData>();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl font-bold text-white">Seção 1: Definindo a Persona</h2>
        <p className="text-white/60">
          Objetivo: Entender profundamente quem é o seu <strong>cliente ideal</strong>. Essas respostas serão a base para criarmos os textos (copy) dos anúncios e definirmos a segmentação de público nas ferramentas.
          <br/>
          <span className="text-white/40 italic text-sm mt-1 block">
            Importante: Responda pensando no perfil do cliente que você deseja atrair, e não sobre você ou seu escritório.
          </span>
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <motion.div variants={itemVariants}>
          <Label>Nome do Escritório</Label>
          <Input {...register("persona.officeName")} placeholder="Ex: Silva & Souza Advogados" className="h-14 text-lg" />
        </motion.div>
      </div>

      {/* Perfil Demográfico */}
      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        <div>
          <h3 className="text-lg font-semibold text-brand-accent">Perfil Demográfico</h3>
          <p className="text-white/50 text-sm">Dados básicos para segmentação nas plataformas de anúncios.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={itemVariants}>
            <Label>Qual a faixa etária do seu cliente ideal?</Label>
            <Input {...register("persona.ageRange")} placeholder="Ex: 30-50 anos" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label>É predominantemente homem, mulher ou ambos?</Label>
            <Input {...register("persona.gender")} placeholder="Ex: Ambos, mas 60% mulheres" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label>Qual a faixa de renda ou classe social?</Label>
            <Input {...register("persona.incomeLevel")} placeholder="Ex: Classe B/C, renda familiar 5k+" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label>Qual a profissão ou ocupação mais comum?</Label>
            <Input {...register("persona.occupation")} placeholder="Ex: Pequenos empresários, CLT" />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <Label>É casado, solteiro, divorciado? Tem filhos?</Label>
            <Input {...register("persona.maritalStatus")} placeholder="Ex: Casados com filhos" />
          </motion.div>
        </div>
        <p className="text-white/30 italic text-xs mt-2">* Lembre-se: as respostas devem refletir o perfil do seu cliente ideal.</p>
      </div>

      {/* Situação de Vida */}
      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        <div>
          <h3 className="text-lg font-semibold text-brand-accent">Situação de Vida</h3>
          <p className="text-white/50 text-sm">O contexto pessoal que leva o cliente a buscar seus serviços.</p>
        </div>
        
        <motion.div variants={itemVariants}>
          <Label>Em que momento da vida essa pessoa costuma precisar dos seus serviços?</Label>
          <Textarea 
            {...register("persona.lifeMoment")} 
            placeholder="Ex: perdeu o emprego, está se divorciando, sofreu um acidente..." 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>O problema jurídico dela é urgente ou ela pode esperar?</Label>
          <Input {...register("persona.urgency")} placeholder="Ex: Urgente, precisa resolver em dias" />
        </motion.div>
        <p className="text-white/30 italic text-xs mt-2">* Foque no momento de vida do seu cliente ideal.</p>
      </div>

      {/* Comportamento e Decisão */}
      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        <div>
          <h3 className="text-lg font-semibold text-brand-accent">Comportamento e Decisão</h3>
          <p className="text-white/50 text-sm">Como ele busca soluções e o que influencia sua escolha.</p>
        </div>
        
        <motion.div variants={itemVariants}>
          <Label>O que ela pesquisa no Google quando tem esse problema?</Label>
          <Textarea 
            {...register("persona.searchTerms")} 
            placeholder="Termos que usaria na busca" 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>O que faria ela escolher seu escritório e não outro? (Diferencial)</Label>
          <Textarea 
            {...register("persona.differentiator")} 
            placeholder="Ex: Atendimento humanizado, rapidez..." 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Quanto tempo ela costuma levar para decidir contratar?</Label>
          <Input {...register("persona.decisionTime")} placeholder="Ex: Imediato após a consulta" />
        </motion.div>
        <p className="text-white/30 italic text-xs mt-2">* Pense em como o seu cliente ideal toma decisões.</p>
      </div>

      {/* Medos e Objeções */}
      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        <div>
          <h3 className="text-lg font-semibold text-brand-accent">Medos e Objeções</h3>
          <p className="text-white/50 text-sm">Barreiras mentais e financeiras que impedem o fechamento.</p>
        </div>
        
        <motion.div variants={itemVariants}>
          <Label>O seu cliente ideal costuma ter resistência a pagar consulta ou honorários iniciais?</Label>
          <Textarea 
            {...register("persona.financialBarrier")} 
            placeholder="Espera pagar somente no êxito?" 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Existe alguma "mentira" que ele ouviu falar e que atrapalha o fechamento?</Label>
          <Textarea 
            {...register("persona.myths")} 
            placeholder='Ex: "Se eu processar, nunca mais arrumo emprego"' 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Quando você perde um cliente para a concorrência qual costuma ser o motivo real?</Label>
          <Textarea 
            {...register("persona.classicNo")} 
            placeholder="Preço, localização, confiança..." 
            className="min-h-[80px]"
          />
        </motion.div>
        <p className="text-white/30 italic text-xs mt-2">* Considere as objeções reais do seu cliente ideal.</p>
      </div>

      {/* Comunicação */}
      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        <div>
          <h3 className="text-lg font-semibold text-brand-accent">Comunicação</h3>
          <p className="text-white/50 text-sm">A linguagem e os canais ideais para conectar com esse público.</p>
        </div>
        
        <motion.div variants={itemVariants}>
          <Label>Que tipo de linguagem funciona melhor com ela?</Label>
          <Input {...register("persona.languageStyle")} placeholder="Formal, acessível, acolhedora..." />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Que tipo de conteúdo chamaria a atenção dela?</Label>
          <Input {...register("persona.contentPreferences")} placeholder="Vídeos, posts com dicas..." />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          <Label>Existe algo que queira adicionar sobre o seu cliente ideal?</Label>
          <Textarea 
            {...register("persona.additionalInfo")} 
            placeholder="Informações extras que podem ajudar..." 
            className="min-h-[80px]"
          />
        </motion.div>
        <p className="text-white/30 italic text-xs mt-2">* Detalhes sobre a comunicação preferida do seu cliente ideal.</p>
      </div>
    </motion.div>
  );
};
