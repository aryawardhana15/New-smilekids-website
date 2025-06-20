import PageHeader from "@/components/PageHeader";
import PricingTable from "@/components/PricingTable";
import { motion } from 'framer-motion';

export default function HargaPage() {
  return (
    <main>
        <PageHeader 
            title="Harga & Paket Layanan"
            subtitle="Kami menawarkan berbagai pilihan paket yang fleksibel untuk memenuhi kebutuhan Anda dan buah hati."
        />
        <motion.section 
            className="py-16 md:py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="container">
                <PricingTable />
            </div>
        </motion.section>
    </main>
  );
} 