import React from "react";
import { useFormContext } from "react-hook-form";
import { BriefingFormData } from "../../types/form";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Label } from "../ui/Label";
import { motion } from "framer-motion";

export const SectionOperational: React.FC = () => {
  const { register } = useFormContext<BriefingFormData>();

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
        <h2 className="text-2xl font-bold text-white">Seção 2: Operacional e Estratégia</h2>
        <p className="text-white/60">
          Objetivo: Definir a logística da campanha e as configurações técnicas. Precisamos garantir que os anúncios atraiam o tipo certo de causa e que o escritório esteja preparado para atender a demanda gerada.
        </p>
      </div>

      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        
        <motion.div variants={itemVariants}>
          <Label>Foco da Campanha: Quais são as 3 principais causas/serviços que trazem maior retorno financeiro e que devemos priorizar nos anúncios?</Label>
          <Textarea 
            {...register("operational.campaignFocus")} 
            placeholder="Liste as 3 causas com maior retorno financeiro" 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>O que NÃO atender: Existe alguma causa ou perfil de cliente que vocês não querem receber de jeito nenhum?</Label>
          <Textarea 
            {...register("operational.negativeTargeting")} 
            placeholder="Ex: pequenas causas, pro bono, clientes sem documentos..." 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Geolocalização: O atendimento exige presença física ou é 100% digital?</Label>
          <Input 
            {...register("operational.geolocation")} 
            placeholder="Ex: Apenas minha cidade, Estado todo, Brasil..." 
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Atendimento: Quem responderá os contatos dos anúncios?</Label>
          <Input 
            {...register("operational.attendance")} 
            placeholder="Secretária, Sócio, Comercial, IA?" 
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Concorrência: Cite 2 ou 3 escritórios concorrentes que você vê anunciando ou admira o posicionamento digital.</Label>
          <Textarea 
            {...register("operational.competitors")} 
            placeholder="Links ou nomes de concorrentes" 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Histórico: Você já anunciou antes? Se sim, o que funcionou muito bem e o que foi um fracasso?</Label>
          <Textarea 
            {...register("objectives.history")} 
            placeholder="Conte sua experiência anterior" 
            className="min-h-[80px]"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};
