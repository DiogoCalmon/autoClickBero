// script-render.ts - Versão para Render Cron Jobs
import axios from 'axios';

const TARGET_URL = 'https://www.berolab.app/';

async function acessarSite() {
  try {
    console.log(`[${new Date().toLocaleString()}] Acessando ${TARGET_URL}...`);
    
    const response = await axios.get(TARGET_URL, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    console.log(`✅ Site acessado com sucesso! Status: ${response.status}`);
    console.log(`📊 Tamanho da resposta: ${response.data.length} caracteres`);
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao acessar o site:', error instanceof Error ? error.message : String(error));
    return false;
  }
}

// Função principal - executa uma vez e sai
async function main() {
  console.log('🚀 Iniciando execução...');
  
  const sucesso = await acessarSite();
  
  if (sucesso) {
    console.log('✅ Execução concluída com sucesso!');
    process.exit(0); // Sair com sucesso
  } else {
    console.log('❌ Execução falhou!');
    process.exit(1); // Sair com erro
  }
}

// Executar
main().catch((error) => {
  console.error('💥 Erro fatal:', error);
  process.exit(1);
});