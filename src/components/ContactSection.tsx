'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(9, 'Invalid phone'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  });
  
  type ContactFormData = z.infer<typeof contactSchema>;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t('form.success.title')}</h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('form.success.description')}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gray-900 text-white px-8 py-3 rounded-none font-light hover:bg-gray-800 transition-colors"
            >
              {t('form.success.sendAnother')}
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
        <section id="contact" className="py-32 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                <h2 className="text-3xl md:text-4xl font-thin mb-10 tracking-tight">
                  {t('title')}
                </h2>
                <div className="w-20 h-px bg-gray-400 mb-10"></div>
                <p className="text-base text-gray-300 mb-8 leading-relaxed font-light">
                  {t('description1')}
                </p>
                <p className="text-base text-gray-300 mb-8 leading-relaxed font-light">
                  {t('description2')}
                </p>
                <p className="text-base text-gray-300 mb-10 leading-relaxed font-light">
                  {t('description3')}
                </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-light text-base">{t('info.location')}</h3>
                  <p className="text-gray-300 text-sm">{t('info.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-light text-base">{t('info.email')}</h3>
                  <p className="text-gray-300 text-sm">{t('info.emailValue')}</p>
                </div>
              </div>
            </div>

            {/* Team Contacts */}
            <div className="mt-12">
              <h3 className="text-xl font-light mb-8">{t('info.team.title')}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Andrés */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-light">{t('info.team.andres.name')}</h4>
                    <p className="text-sm text-gray-400 font-light">{t('info.team.andres.role')}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{t('info.team.andres.phone')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{t('info.team.andres.email')}</span>
                  </div>
                </div>

                {/* Laín */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-light">{t('info.team.lain.name')}</h4>
                    <p className="text-sm text-gray-400 font-light">{t('info.team.lain.role')}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{t('info.team.lain.phone')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{t('info.team.lain.email')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="bg-white rounded-none p-8 text-gray-900"
            >
              <h3 className="text-xl font-light mb-8 tracking-wide">{t('form.title')}</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.name')} *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-light"
                  placeholder={t('form.placeholders.name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.email')} *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-light"
                  placeholder={t('form.placeholders.email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.phone')} *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-light"
                  placeholder={t('form.placeholders.phone')}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.subject')} *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors font-light"
                  placeholder={t('form.placeholders.subject')}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.message')} *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none"
                  placeholder={t('form.placeholders.message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t('form.sending')}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t('form.submit')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
