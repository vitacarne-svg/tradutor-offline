import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  StatusBar,
  Clipboard,
} from 'react-native';
import * as Haptics from 'expo-haptics';

const pt_es = {
  // Saudações
  "olá": "hola",
  "oi": "hola",
  "bom dia": "buenos días",
  "boa tarde": "buenas tardes",
  "boa noite": "buenas noches",
  "até logo": "hasta luego",
  "tchau": "adiós",
  "adeus": "adiós",
  
  // Cortesia
  "obrigado": "gracias",
  "muito obrigado": "muchas gracias",
  "obrigada": "gracias",
  "por favor": "por favor",
  "desculpa": "disculpa",
  "desculpe": "disculpe",
  "com licença": "con permiso",
  "de nada": "de nada",
  
  // Sim/Não
  "sim": "sí",
  "não": "no",
  "talvez": "quizás",
  
  // Alimentos
  "água": "agua",
  "comida": "comida",
  "café": "café",
  "pão": "pan",
  "arroz": "arroz",
  "feijão": "frijol",
  "carne": "carne",
  "frango": "pollo",
  "peixe": "pescado",
  "ovo": "huevo",
  "leite": "leche",
  "queijo": "queso",
  "manteiga": "mantequilla",
  "fruta": "fruta",
  "maçã": "manzana",
  "banana": "plátano",
  "laranja": "naranja",
  "limão": "limón",
  "morango": "fresa",
  "legume": "verdura",
  "tomate": "tomate",
  "cebola": "cebolla",
  "alho": "ajo",
  "batata": "papa",
  "chocolate": "chocolate",
  "açúcar": "azúcar",
  "sal": "sal",
  "pimenta": "pimienta",
  "sopa": "sopa",
  "salada": "ensalada",
  "sobremesa": "postre",
  "bebida": "bebida",
  "vinho": "vino",
  "cerveja": "cerveza",
  "suco": "jugo",
  "chá": "té",
  
  // Objetos/Casa
  "livro": "libro",
  "casa": "casa",
  "porta": "puerta",
  "janela": "ventana",
  "cama": "cama",
  "mesa": "mesa",
  "cadeira": "silla",
  "sofá": "sofá",
  "televisão": "televisión",
  "rádio": "radio",
  "telefone": "teléfono",
  "computador": "computadora",
  "celular": "celular",
  "lampada": "bombilla",
  "vela": "vela",
  "espelho": "espejo",
  "quadro": "cuadro",
  "cortina": "cortina",
  "tapete": "alfombra",
  "relógio": "reloj",
  "despertador": "despertador",
  
  // Animais
  "gato": "gato",
  "cão": "perro",
  "cachorro": "cachorro",
  "passaro": "pájaro",
  "ave": "ave",
  "galinha": "gallina",
  "pato": "pato",
  "ganso": "ganso",
  "vaca": "vaca",
  "boi": "buey",
  "porco": "cerdo",
  "ovelha": "oveja",
  "cavalo": "caballo",
  "rato": "ratón",
  "cobra": "serpiente",
  "sapo": "sapo",
  "peixe": "pez",
  "tubarão": "tiburón",
  "baleia": "ballena",
  "inseto": "insecto",
  "formiga": "hormiga",
  "abelha": "abeja",
  "borboleta": "mariposa",
  "mosca": "mosca",
  
  // Natureza
  "árvore": "árbol",
  "flor": "flor",
  "rosa": "rosa",
  "margarida": "margarita",
  "grama": "pasto",
  "gelo": "hielo",
  "neve": "nieve",
  "chuva": "lluvia",
  "vento": "viento",
  "tempestade": "tormenta",
  "nuvem": "nube",
  "céu": "cielo",
  "sol": "sol",
  "lua": "luna",
  "estrela": "estrella",
  "montanha": "montaña",
  "rio": "río",
  "mar": "mar",
  "lago": "lago",
  "praia": "playa",
  "deserto": "desierto",
  "floresta": "bosque",
  "pedra": "piedra",
  "areia": "arena",
  "terra": "tierra",
  
  // Cores
  "vermelho": "rojo",
  "azul": "azul",
  "verde": "verde",
  "amarelo": "amarillo",
  "preto": "negro",
  "branco": "blanco",
  "cinza": "gris",
  "rosa": "rosa",
  "roxo": "púrpura",
  "laranja": "naranja",
  "marrom": "marrón",
  "dourado": "dorado",
  "prateado": "plateado",
  
  // Números
  "zero": "cero",
  "um": "uno",
  "dois": "dos",
  "três": "tres",
  "quatro": "cuatro",
  "cinco": "cinco",
  "seis": "seis",
  "sete": "siete",
  "oito": "ocho",
  "nove": "nueve",
  "dez": "diez",
  "onze": "once",
  "doze": "doce",
  "treze": "trece",
  "quatorze": "catorce",
  "quinze": "quince",
  "dezesseis": "dieciséis",
  "dezessete": "diecisiete",
  "dezoito": "dieciocho",
  "dezenove": "diecinueve",
  "vinte": "veinte",
  "trinta": "treinta",
  "quarenta": "cuarenta",
  "cinquenta": "cincuenta",
  "sessenta": "sesenta",
  "setenta": "setenta",
  "oitenta": "ochenta",
  "noventa": "noventa",
  "cem": "cien",
  "mil": "mil",
  
  // Dias da Semana
  "segunda": "lunes",
  "terça": "martes",
  "quarta": "miércoles",
  "quinta": "jueves",
  "sexta": "viernes",
  "sábado": "sábado",
  "domingo": "domingo",
  
  // Meses
  "janeiro": "enero",
  "fevereiro": "febrero",
  "março": "marzo",
  "abril": "abril",
  "maio": "mayo",
  "junho": "junio",
  "julho": "julio",
  "agosto": "agosto",
  "setembro": "septiembre",
  "outubro": "octubre",
  "novembro": "noviembre",
  "dezembro": "diciembre",
  
  // Tempo
  "dia": "día",
  "noite": "noche",
  "manhã": "mañana",
  "tarde": "tarde",
  "madrugada": "madrugada",
  "hora": "hora",
  "minuto": "minuto",
  "segundo": "segundo",
  "semana": "semana",
  "mês": "mes",
  "ano": "año",
  "hoje": "hoy",
  "ontem": "ayer",
  "amanhã": "mañana",
  "sempre": "siempre",
  "nunca": "nunca",
  
  // Pessoas
  "homem": "hombre",
  "mulher": "mujer",
  "menino": "niño",
  "menina": "niña",
  "bebê": "bebé",
  "criança": "hijo",
  "adulto": "adulto",
  "velho": "viejo",
  "pai": "padre",
  "mãe": "madre",
  "filho": "hijo",
  "filha": "hija",
  "irmão": "hermano",
  "irmã": "hermana",
  "avó": "abuela",
  "avô": "abuelo",
  "tio": "tío",
  "tia": "tía",
  "primo": "primo",
  "prima": "prima",
  "esposo": "esposo",
  "esposa": "esposa",
  "marido": "marido",
  "amigo": "amigo",
  "amiga": "amiga",
  "vizinho": "vecino",
  "professor": "profesor",
  "aluno": "alumno",
  "médico": "médico",
  "enfermeira": "enfermera",
  "policial": "policía",
  "bombeiro": "bombero",
  "chefe": "jefe",
  "empregado": "empleado",
  
  // Ações/Verbos
  "ir": "ir",
  "vir": "venir",
  "ficar": "quedarse",
  "estar": "estar",
  "ser": "ser",
  "ter": "tener",
  "fazer": "hacer",
  "dar": "dar",
  "tomar": "tomar",
  "comer": "comer",
  "beber": "beber",
  "dormir": "dormir",
  "acordar": "despertarse",
  "levantar": "levantarse",
  "deitar": "acostarse",
  "sentar": "sentarse",
  "correr": "correr",
  "andar": "caminar",
  "pular": "saltar",
  "dançar": "bailar",
  "cantar": "cantar",
  "chorar": "llorar",
  "rir": "reír",
  "sorrir": "sonreír",
  "falar": "hablar",
  "ouvir": "escuchar",
  "ver": "ver",
  "olhar": "mirar",
  "amar": "amar",
  "beijar": "besar",
  "abraçar": "abrazar",
  "pegar": "coger",
  "soltar": "soltar",
  "abrir": "abrir",
  "fechar": "cerrar",
  "comprar": "comprar",
  "vender": "vender",
  "pagar": "pagar",
  "trabalhar": "trabajar",
  "estudar": "estudiar",
  "brincar": "jugar",
  "jogar": "jugar",
  "ganhar": "ganar",
  "perder": "perder",
  "ajudar": "ayudar",
  "procurar": "buscar",
  "encontrar": "encontrar",
  "pensar": "pensar",
  "acreditar": "creer",
  "saber": "saber",
  "conhecer": "conocer",
  "lembrar": "recordar",
  "esquecer": "olvidar",
  "gostar": "gustar",
  "preferir": "preferir",
  
  // Adjetivos
  "grande": "grande",
  "pequeno": "pequeño",
  "bonito": "bonito",
  "feio": "feo",
  "bom": "bueno",
  "mau": "malo",
  "novo": "nuevo",
  "quente": "caliente",
  "frio": "frío",
  "morno": "tibio",
  "seco": "seco",
  "molhado": "mojado",
  "sujo": "sucio",
  "limpo": "limpio",
  "forte": "fuerte",
  "fraco": "débil",
  "rápido": "rápido",
  "lento": "lento",
  "leve": "ligero",
  "pesado": "pesado",
  "fácil": "fácil",
  "difícil": "difícil",
  "possível": "posible",
  "impossível": "imposible",
  "verdadeiro": "verdadero",
  "falso": "falso",
  "certo": "correcto",
  "errado": "incorrecto",
  "diferente": "diferente",
  "igual": "igual",
  "melhor": "mejor",
  "pior": "peor",
  "mais": "más",
  "menos": "menos",
  "muito": "mucho",
  "pouco": "poco",
  "bastante": "bastante",
  "demasiado": "demasiado",
  "agradável": "agradable",
  "desagradável": "desagradable",
  "tudo bem": "¿qué tal?",
  "tudo bem?": "¿qué tal?",
  "amor": "amor",
};

const es_pt = Object.fromEntries(Object.entries(pt_es).map(([k, v]) => [v, k]));

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');
  const [modo, setModo] = useState('pt_es');
  const [historico, setHistorico] = useState([]);

  const traduzir = () => {
    const textoBusca = texto.toLowerCase().trim();

    if (!textoBusca) {
      Alert.alert('⚠️ Erro', 'Digite algo para traduzir!');
      return;
    }

    let traducao;
    if (modo === 'pt_es') {
      traducao = pt_es[textoBusca] || '❌ Palavra não encontrada';
    } else {
      traducao = es_pt[textoBusca] || '❌ Palabra no encontrada';
    }

    setResultado(traducao);
    
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    setHistorico([
      { original: texto, traducao, modo, id: Date.now() },
      ...historico,
    ].slice(0, 15));

    setTexto('');
  };

  const copiarResultado = () => {
    if (resultado) {
      Clipboard.setString(resultado);
      Alert.alert('✅ Copiado!', resultado);
    }
  };

  const limparHistorico = () => {
    setHistorico([]);
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />

      <View style={styles.header}>
        <Text style={styles.title}>🌐 Tradutor Offline</Text>
        <Text style={styles.subtitle}>Português ↔ Espanhol</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.modoContainer}>
          <TouchableOpacity
            style={[
              styles.modoBtn,
              modo === 'pt_es' && styles.modoBtnActive,
            ]}
            onPress={() => {
              setModo('pt_es');
              Haptics.selectionAsync();
            }}
          >
            <Text style={[styles.modoBtnText, modo === 'pt_es' && styles.modoBtnTextActive]}>
              🇵🇹 PT → ES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.modoBtn,
              modo === 'es_pt' && styles.modoBtnActive,
            ]}
            onPress={() => {
              setModo('es_pt');
              Haptics.selectionAsync();
            }}
          >
            <Text style={[styles.modoBtnText, modo === 'es_pt' && styles.modoBtnTextActive]}>
              🇪🇸 ES → PT
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite a palavra ou frase..."
            placeholderTextColor="#999"
            value={texto}
            onChangeText={setTexto}
            onSubmitEditing={traduzir}
            returnKeyType="search"
          />
        </View>

        <TouchableOpacity 
          style={styles.btnTraduzir} 
          onPress={traduzir}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>🔍 Traduzir</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={styles.resultContainer}>
            <View style={styles.resultHeader}>
              <Text style={styles.labelResultado}>Resultado:</Text>
              <TouchableOpacity onPress={copiarResultado}>
                <Text style={styles.copiarBtn}>📋 Copiar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.resultado}>{resultado}</Text>
          </View>
        )}

        {historico.length > 0 && (
          <View style={styles.historicoContainer}>
            <View style={styles.historicoHeader}>
              <Text style={styles.historicoTitle}>📋 Histórico</Text>
              <TouchableOpacity onPress={limparHistorico}>
                <Text style={styles.limparBtn}>Limpar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.historicoList}>
              {historico.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.historicoItem}
                  onPress={() => {
                    setTexto(item.original);
                    Clipboard.setString(item.traducao);
                  }}
                >
                  <Text style={styles.historicoOriginal}>{item.original}</Text>
                  <Text style={styles.historicoSeta}>→</Text>
                  <Text style={styles.historicoTraducao}>{item.traducao}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#1976D2',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#e3f2fd',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  modoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  modoBtn: {
    flex: 1,
    padding: 14,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  modoBtnActive: {
    backgroundColor: '#2196F3',
    borderColor: '#1976D2',
  },
  modoBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#555',
  },
  modoBtnTextActive: {
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  btnTraduzir: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#2196F3',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  labelResultado: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },
  copiarBtn: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '700',
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  historicoContainer: {
    marginBottom: 30,
  },
  historicoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  historicoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  limparBtn: {
    fontSize: 12,
    color: '#f44336',
    fontWeight: '700',
  },
  historicoList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  historicoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  historicoOriginal: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
  historicoSeta: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#2196F3',
  },
  historicoTraducao: {
    flex: 1,
    fontSize: 13,
    color: '#4CAF50',
    textAlign: 'right',
    fontWeight: '500',
  },
});