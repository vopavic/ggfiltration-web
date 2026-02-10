"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage: string;
}

export function LeadPopup({ isOpen, onClose, sourcePage }: LeadPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Close after success
    setTimeout(() => {
        onClose();
        setIsSuccess(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
          />
          
          {/* Modal Container to center content and allow scrolling if needed */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
             >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {isSuccess ? (
                    <div className="p-12 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Poptávka odeslána!</h3>
                        <p className="text-slate-600">Děkujeme za Váš zájem. Náš obchodní zástupce Vás bude brzy kontaktovat.</p>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        {/* Header */}
                        <div className="bg-slate-50 p-8 border-b border-slate-100">
                             <h3 className="text-2xl font-bold text-slate-900">Nezávazná poptávka</h3>
                             <p className="text-slate-500 mt-1">Získejte návrh řešení a cenovou kalkulaci zdarma.</p>
                        </div>
                        
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-4">
                            <input type="hidden" name="source" value={sourcePage} />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Jméno a příjmení *</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required 
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Jan Novák"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Firma</label>
                                    <input 
                                        type="text" 
                                        id="company" 
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Název firmy"
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">E-mail *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required 
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="jan@firma.cz"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon *</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        required 
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="+420 777 000 000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Popis poptávky</label>
                                <textarea 
                                    id="message" 
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                    placeholder="Popište stručně Váš požadavek..."
                                />
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Odesílám...
                                        </>
                                    ) : (
                                        <>
                                            Odeslat poptávku <Send className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-slate-400 mt-4">
                                    Odesláním souhlasíte se zpracováním osobních údajů.
                                </p>
                            </div>
                        </form>
                    </div>
                )}
             </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
