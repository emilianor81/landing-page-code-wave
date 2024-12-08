import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { features } from '../constants/features';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
          Transformamos Ideas en Realidad Digital
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Desarrollamos aplicaciones web y móviles innovadoras que impulsan el éxito de tu negocio
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} index={index}>
              <div className="mb-4 text-blue-600 dark:text-blue-400">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}