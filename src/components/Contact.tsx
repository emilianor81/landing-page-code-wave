import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { contactInfo } from '../constants/contact';

export function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Estamos aquí para convertir tu visión en realidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} index={index} className="flex flex-col items-center">
                <div className="mb-4 text-blue-600 dark:text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.info}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}