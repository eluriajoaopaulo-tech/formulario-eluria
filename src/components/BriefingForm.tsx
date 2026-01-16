import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { BriefingFormData } from "../types/form";
import { SectionPersona } from "./sections/SectionPersona";
import { SectionOperational } from "./sections/SectionOperational";
import { SectionObjectives } from "./sections/SectionObjectives";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const STEPS = [
  { id: 1, title: "Persona", component: SectionPersona },
  { id: 2, title: "Operacional", component: SectionOperational },
  { id: 3, title: "Objetivos", component: SectionObjectives },
];

import { supabase } from "../lib/supabase";

export const BriefingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const methods = useForm<BriefingFormData>({
    mode: "onBlur",
  });

  const nextStep = async () => {
    // Validate current step fields if needed (omitted for flexibility now)
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      await onSubmit(methods.getValues());
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const onSubmit = async (data: BriefingFormData) => {
    console.log("Form Data:", data);
    
    try {
      const { error } = await supabase
        .from('briefings')
        .insert([
          { 
            office_name: data.persona.officeName,
            contact_info: {
               // Assuming we might want to add contact fields later, 
               // for now mapping existing relevant fields or keeping it structured
               email: "pending@implementation.com" // Placeholder or add email field
            },
            persona_data: data.persona,
            operational_data: data.operational,
            objectives_data: data.objectives,
            status: 'new'
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting briefing:', error);
      setIsError(true);
      alert("Houve um erro ao enviar o formulário. Por favor, tente novamente.");
    }
  };

  const CurrentComponent = STEPS[currentStep - 1].component;

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center space-y-6"
        >
          <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white">Briefing Enviado com Sucesso!</h2>
          <p className="text-white/70">
            Agradecemos por dedicar seu tempo para preencher este formulário. Suas respostas são fundamentais para construirmos uma estratégia assertiva e personalizada para o seu escritório.
          </p>
          <div className="text-white/40 text-sm mt-4">
            Nossa equipe analisará os dados e entrará em contato em breve.
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl mb-12 flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-accent text-center">
          Formulário de Briefing
        </h1>
        <p className="text-brand-accent/80 font-medium tracking-wide uppercase text-sm">
          Tráfego para Advocacia
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mb-8">
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-brand-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-white/40 uppercase tracking-widest font-medium">
          {STEPS.map((step) => (
            <span 
              key={step.id} 
              className={cn(currentStep >= step.id ? "text-brand-accent" : "")}
            >
              0{step.id} {step.title}
            </span>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <FormProvider {...methods}>
        <motion.div 
          layout
          className="w-full max-w-4xl bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl shadow-brand-dark/50"
        >
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentComponent />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={cn(currentStep === 1 && "invisible")}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>

              <Button 
                type="button" 
                onClick={nextStep}
                isLoading={methods.formState.isSubmitting}
                className="group"
              >
                {currentStep === STEPS.length ? "Finalizar Briefing" : "Próxima Seção"}
                {currentStep !== STEPS.length && (
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
                {currentStep === STEPS.length && (
                  <Sparkles className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </FormProvider>
      
      <div className="mt-8 text-white/20 text-sm">
        Powered by Eluria AI & Marketing
      </div>
    </div>
  );
};
