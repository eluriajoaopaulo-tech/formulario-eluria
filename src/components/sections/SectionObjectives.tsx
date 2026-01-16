import React from "react";
import { useFormContext } from "react-hook-form";
import { BriefingFormData } from "../../types/form";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Label } from "../ui/Label";
import { motion } from "framer-motion";

export const SectionObjectives: React.FC = () => {
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
        <h2 className="text-2xl font-bold text-white">Seção 3: Objetivos e Investimento</h2>
        <p className="text-white/60">
          Objetivo: Alinhar as expectativas financeiras e definir o que é sucesso para o projeto.
        </p>
      </div>

      <div className="space-y-4 border-l-2 border-brand-accent/30 pl-4">
        
        <motion.div variants={itemVariants}>
          <Label>Objetivo Principal: O que você define como sucesso nesta campanha? (Ex: Aumentar número de mensagens no WhatsApp, receber ligações no escritório, branding/reconhecimento de marca).</Label>
          <Textarea 
            {...register("objectives.mainObjective")} 
            placeholder="Ex: Msgs no WhatsApp, Ligações, Branding..." 
            className="min-h-[80px]"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Verba de Mídia: Quanto você está disposto a investir diretamente nas plataformas (Google/Meta) por mês?</Label>
          <Input 
            {...register("objectives.budget")} 
            placeholder="R$ valor mensal" 
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Custo por Lead (CPL): Você tem um histórico de quanto custava cada contato? Ou, se não tiver, quanto estaria disposto a pagar por um potencial cliente chamando no WhatsApp?</Label>
          <Input 
            {...register("objectives.cpl")} 
            placeholder="Ex: R$ 20,00 por lead" 
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Label>Expectativa do Projeto: O que você espera alcançar com o nosso trabalho nos próximos meses? (Espaço aberto para o cliente escrever).</Label>
          <Textarea 
            {...register("objectives.expectations")} 
            placeholder="Espaço aberto para suas observações" 
            className="min-h-[150px]"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};
