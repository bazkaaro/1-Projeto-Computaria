// ============================================================
// BANCO DE DADOS COMPLETO - 200+ CURSOS DE SÃO LUÍS
// PARTE 1: VARIÁVEIS + SAÚDE (TODOS OS CURSOS DA ÁREA)
// ============================================================

const carreirasSLZ = {};
let totalCursos = 0;

function addCarreira(titulo, area, duracao, notaEnem, residencia, mercado, rota, publica, privadas) {
    let key = titulo.toLowerCase().replace(/[^\w]/g, '');
    if (!carreirasSLZ[key]) {
        carreirasSLZ[key] = {
            titulo: titulo, area: area, duracao: duracao, notaEnem: notaEnem,
            residencia: residencia, mercado: mercado, rota: rota,
            faculdades: { publica: publica, privadas: privadas }
        };
        totalCursos++;
    }
}

// ============================================================
// SAÚDE (30 cursos)
// ============================================================
addCarreira("Medicina", "Saúde", "6 anos + residência", 790, "Obrigatória via ENARE", "Nota UFMA: 794,36. Salário médio: R$12.000 a R$25.000", ["Ensino Médio foco em Ciências", "ENEM 790+", "SISU UFMA", "Graduação 6 anos", "Residência"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "Florence", "Edufor"]);
addCarreira("Enfermagem", "Saúde", "4-5 anos", 660, "UTI, Pediatria, Obstetrícia", "Salário médio: R$4.500 a R$8.000", ["Ensino Médio", "ENEM 660+", "Graduação", "Estágio", "COREN"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Odontologia", "Saúde", "5 anos", 750, "Ortodontia, Implantodontia", "Nota UFMA: 750,10. Salário médio: R$6.000 a R$12.000", ["Ensino Médio", "ENEM 750+", "Graduação", "CRO"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Fisioterapia", "Saúde", "5 anos", 685, "Neurofuncional, Esportiva", "Salário médio: R$4.500 a R$8.000", ["Ensino Médio", "ENEM 685+", "Graduação", "CREFITO"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Psicologia", "Saúde", "5 anos", 680, "Clínica, Organizacional", "Salário médio: R$4.000 a R$9.000", ["Ensino Médio", "ENEM 680+", "Graduação", "CRP"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "IESMA"]);
addCarreira("Nutrição", "Saúde", "4-5 anos", 660, "Clínica, Esportiva", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 660+", "Graduação", "CRN"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Farmácia", "Saúde", "5 anos", 680, "Análises Clínicas", "Salário médio: R$4.000 a R$9.000", ["Ensino Médio", "ENEM 680+", "Graduação", "CRF"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Educação Física", "Saúde", "4 anos", 600, "Treinamento, Musculação", "Salário médio: R$3.000 a R$7.000", ["Ensino Médio", "ENEM 600+", "Graduação", "CREF"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "Edufor", "Faculdade Santa Terezinha"]);
addCarreira("Terapia Ocupacional", "Saúde", "4-5 anos", 640, "Reabilitação, Neurofuncional", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 640+", "Graduação", "COFFITO"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Biomedicina", "Saúde", "4 anos", 660, "Análises Clínicas, Estética", "Salário médio: R$3.500 a R$8.000", ["Ensino Médio", "ENEM 660+", "Graduação", "CRBM"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Fonoaudiologia", "Saúde", "4 anos", 650, "Linguagem, Audiologia", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 650+", "Graduação", "CREFONO"], "UEMA", ["Estácio", "UNDB"]);
addCarreira("Radiologia", "Saúde", "3 anos", 540, "Ressonância, Tomografia", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 540+", "Tecnólogo", "CONTER"], "Não há pública", ["Estácio", "Uniceuma", "UNDB"]);
addCarreira("Gerontologia", "Saúde", "4 anos", 550, "Envelhecimento, Cuidados", "Salário médio: R$3.000 a R$6.000", ["Ensino Médio", "ENEM 550+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Saúde Coletiva", "Saúde", "4 anos", 580, "Políticas de Saúde", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 580+", "Graduação"], "UFMA", []);
addCarreira("Educação Especial", "Saúde", "4 anos", 530, "Educação Inclusiva", "Salário médio: R$3.000 a R$6.000", ["Ensino Médio", "ENEM 530+", "Graduação"], "UEMA", ["Estácio"]);
addCarreira("Estética e Cosmética", "Saúde", "2-3 anos", 490, "Estética Avançada", "Salário médio: R$2.500 a R$5.000", ["Ensino Médio", "ENEM 490+", "Tecnólogo"], "Não há pública", ["Estácio", "Uniceuma"]);
addCarreira("Gestão Hospitalar", "Saúde", "2-3 anos", 520, "Gestão de Hospitais", "Salário médio: R$4.000 a R$8.000", ["Ensino Médio", "ENEM 520+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Análises Clínicas", "Saúde", "3 anos", 540, "Análises Laboratoriais", "Salário médio: R$3.000 a R$6.000", ["Ensino Médio", "ENEM 540+", "Tecnólogo"], "Não há pública", ["Estácio", "Uniceuma"]);
addCarreira("Quiropraxia", "Saúde", "4 anos", 560, "Coluna e Articulações", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 560+", "Graduação"], "Não há pública", ["Estácio"]);
addCarreira("Podologia", "Saúde", "2-3 anos", 480, "Pés e Calçados", "Salário médio: R$2.500 a R$5.000", ["Ensino Médio", "ENEM 480+", "Tecnólogo"], "Não há pública", ["Estácio"]);
addCarreira("Acupuntura", "Saúde", "3 anos", 560, "Medicina Tradicional Chinesa", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 560+", "Tecnólogo"], "Não há pública", ["Estácio"]);
addCarreira("Homeopatia", "Saúde", "3 anos", 560, "Medicina Homeopática", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 560+", "Tecnólogo"], "Não há pública", ["Estácio"]);
addCarreira("Massoterapia", "Saúde", "2 anos", 450, "Massagem Terapêutica", "Salário médio: R$2.500 a R$5.000", ["Ensino Médio", "ENEM 450+", "Tecnólogo"], "Não há pública", ["Estácio", "Senac"]);
addCarreira("Auriculoterapia", "Saúde", "1-2 anos", 450, "Terapia por Pontos", "Salário médio: R$2.000 a R$4.000", ["Ensino Médio", "ENEM 450+", "Curso técnico"], "Não há pública", ["Estácio"]);
addCarreira("Fisioterapia Esportiva", "Saúde", "4 anos", 620, "Fisioterapia aplicada ao esporte", "Salário médio: R$4.500 a R$8.500", ["Ensino Médio", "ENEM 620+", "Graduação", "CREFITO"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Enfermagem Obstétrica", "Saúde", "4-5 anos", 650, "Assistência ao parto", "Salário médio: R$5.000 a R$9.000", ["Ensino Médio", "ENEM 650+", "Graduação", "COREN"], "UFMA", ["Estácio", "Uniceuma"]);
addCarreira("Farmácia Industrial", "Saúde", "5 anos", 670, "Indústria farmacêutica", "Salário médio: R$5.000 a R$11.000", ["Ensino Médio", "ENEM 670+", "Graduação", "CRF"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Psicopedagogia", "Saúde", "4 anos", 560, "Aprendizagem e educação", "Salário médio: R$3.500 a R$7.000", ["Ensino Médio", "ENEM 560+", "Graduação"], "UEMA", ["Estácio", "UNDB"]);
addCarreira("Saúde Mental", "Saúde", "4 anos", 600, "Cuidados em saúde mental", "Salário médio: R$4.000 a R$8.000", ["Ensino Médio", "ENEM 600+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Gestão de Saúde", "Saúde", "3 anos", 530, "Administração de serviços de saúde", "Salário médio: R$4.500 a R$9.000", ["Ensino Médio", "ENEM 530+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB"]);

// ============================================================
// PARTE 2: ENGENHARIAS, TECNOLOGIA, HUMANAS, NEGÓCIOS, EXATAS, AMBIENTAL, ARTES, MILITARES, GASTRONOMIA
// ============================================================

// ========== ENGENHARIAS (22 cursos) ==========
addCarreira("Engenharia Civil", "Engenharias", "5 anos", 690, "Estruturas, Geotecnia", "Salário médio: R$6.000 a R$15.000", ["Foco Matemática/Física", "ENEM 690+", "Graduação", "CREA"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "Faculdade Pitágoras"]);
addCarreira("Engenharia Elétrica", "Engenharias", "5 anos", 705, "Energia, Automação", "Salário médio: R$6.000 a R$14.000", ["Foco Matemática/Física", "ENEM 705+", "Graduação", "CREA"], "UFMA / IFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Engenharia Mecânica", "Engenharias", "5 anos", 695, "Termodinâmica, Automotiva", "Salário médio: R$5.500 a R$13.000", ["Foco Matemática/Física", "ENEM 695+", "Graduação", "CREA"], "UFMA / IFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Engenharia de Produção", "Engenharias", "5 anos", 675, "Logística, Qualidade", "Salário médio: R$5.000 a R$12.000", ["ENEM 675+", "Graduação", "Estágio", "CREA"], "IFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Engenharia Química", "Engenharias", "5 anos", 685, "Processos Químicos", "Salário médio: R$6.000 a R$14.000", ["ENEM 685+", "Graduação", "CREA"], "UFMA", ["Estácio"]);
addCarreira("Engenharia Ambiental", "Engenharias", "5 anos", 665, "Saneamento, Sustentabilidade", "Salário médio: R$5.000 a R$11.000", ["ENEM 665+", "Graduação", "CREA"], "UFMA / IFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Engenharia da Computação", "Engenharias", "5 anos", 725, "Hardware, Software", "Salário médio: R$7.000 a R$16.000", ["ENEM 725+", "Graduação", "CREA"], "UFMA / UEMA", ["Estácio", "UNDB"]);
addCarreira("Engenharia de Petróleo", "Engenharias", "5 anos", 715, "Exploração, Refino", "Salário médio: R$8.000 a R$20.000", ["ENEM 715+", "Graduação", "Estágio", "CREA"], "UFMA", ["Estácio"]);
addCarreira("Arquitetura e Urbanismo", "Engenharias", "5 anos", 700, "Projetos, Paisagismo", "Salário médio: R$5.000 a R$12.000", ["ENEM 700+", "Graduação", "Estágio", "CAU"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Engenharia de Alimentos", "Engenharias", "5 anos", 655, "Tecnologia de Alimentos", "Salário médio: R$5.000 a R$11.000", ["ENEM 655+", "Graduação", "CREA"], "UFMA", []);
addCarreira("Engenharia Naval", "Engenharias", "5 anos", 695, "Projeto Naval, Estaleiros", "Salário médio: R$6.000 a R$15.000", ["ENEM 695+", "Graduação", "CREA"], "UFMA", []);
addCarreira("Engenharia de Pesca", "Engenharias", "5 anos", 605, "Aquicultura, Manejo", "Salário médio: R$4.500 a R$10.000", ["ENEM 605+", "Graduação", "CREA"], "UFMA", []);
addCarreira("Engenharia de Minas", "Engenharias", "5 anos", 640, "Mineração", "Salário médio: R$6.000 a R$14.000", ["ENEM 640+", "Graduação", "CREA"], "UFMA", []);
addCarreira("Engenharia de Materiais", "Engenharias", "5 anos", 665, "Materiais Avançados", "Salário médio: R$6.000 a R$14.000", ["ENEM 665+", "Graduação", "CREA"], "UFMA", []);
addCarreira("Engenharia Florestal", "Engenharias", "5 anos", 620, "Manejo Florestal", "Salário médio: R$5.000 a R$11.000", ["ENEM 620+", "Graduação", "CREA"], "UFMA", []);
addCarreira("Engenharia de Controle e Automação", "Engenharias", "5 anos", 685, "Automação Industrial", "Salário médio: R$5.500 a R$13.000", ["ENEM 685+", "Graduação", "CREA"], "IFMA", ["Estácio"]);
addCarreira("Engenharia Mecatrônica", "Engenharias", "5 anos", 705, "Robótica, Automação", "Salário médio: R$6.000 a R$15.000", ["ENEM 705+", "Graduação", "CREA"], "UFMA", ["Estácio"]);
addCarreira("Engenharia de Telecomunicações", "Engenharias", "5 anos", 680, "Redes, Comunicação", "Salário médio: R$5.500 a R$13.000", ["ENEM 680+", "Graduação", "CREA"], "UFMA", ["Estácio"]);
addCarreira("Engenharia de Transportes", "Engenharias", "5 anos", 660, "Logística, Trânsito", "Salário médio: R$5.500 a R$12.000", ["ENEM 660+", "Graduação", "CREA"], "UFMA", ["Estácio"]);
addCarreira("Engenharia de Energia", "Engenharias", "5 anos", 670, "Energias Renováveis", "Salário médio: R$6.000 a R$14.000", ["ENEM 670+", "Graduação", "CREA"], "UFMA", ["Estácio"]);
addCarreira("Engenharia de Segurança do Trabalho", "Engenharias", "5 anos", 620, "Segurança, Prevenção", "Salário médio: R$5.000 a R$10.000", ["ENEM 620+", "Graduação", "CREA"], "IFMA", ["Estácio"]);
addCarreira("Engenharia de Software", "Engenharias", "4 anos", 720, "Desenvolvimento, DevOps", "Salário médio: R$6.000 a R$18.000", ["ENEM 720+", "Graduação", "Portfólio"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);

// ========== TECNOLOGIA (18 cursos) ==========
addCarreira("Ciência da Computação", "Tecnologia", "4 anos", 720, "IA, Dados, Segurança", "Salário médio: R$19.500 a R$27.100", ["Lógica e matemática", "ENEM 720+", "Graduação", "Portfólio"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Sistemas de Informação", "Tecnologia", "4 anos", 680, "Gestão de TI", "Salário médio: R$5.000 a R$12.000", ["ENEM 680+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Redes de Computadores", "Tecnologia", "2-3 anos", 625, "Infraestrutura, Segurança", "Salário médio: R$4.000 a R$10.000", ["ENEM 625+", "Tecnólogo", "Certificações"], "IFMA", ["Estácio", "UNDB"]);
addCarreira("Análise e Desenvolvimento de Sistemas", "Tecnologia", "2-3 anos", 650, "Desenvolvimento de Software", "Salário médio: R$4.500 a R$12.000", ["ENEM 650+", "Tecnólogo", "Portfólio"], "IFMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Oceanografia", "Tecnologia", "4 anos", 600, "Oceanografia Biológica, Física", "Salário médio: R$4.000 a R$9.000", ["ENEM 600+", "Graduação", "Pesquisa"], "UFMA", []);
addCarreira("Inteligência Artificial", "Tecnologia", "4 anos", 700, "Machine Learning, IA", "Salário médio: R$8.000 a R$20.000", ["ENEM 700+", "Graduação"], "UEMA", ["Estácio"]);
addCarreira("Ciência de Dados", "Tecnologia", "4 anos", 680, "Big Data Analytics", "Salário médio: R$7.000 a R$18.000", ["ENEM 680+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Segurança da Informação", "Tecnologia", "2-3 anos", 660, "Cibersegurança", "Salário médio: R$5.000 a R$12.000", ["ENEM 660+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Banco de Dados", "Tecnologia", "2-3 anos", 620, "Modelagem de Dados", "Salário médio: R$4.500 a R$10.000", ["ENEM 620+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Jogos Digitais", "Tecnologia", "2-3 anos", 580, "Game Design", "Salário médio: R$3.500 a R$8.000", ["ENEM 580+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Gestão da Tecnologia da Informação", "Tecnologia", "2-3 anos", 600, "Governança de TI", "Salário médio: R$5.000 a R$12.000", ["ENEM 600+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB"]);
addCarreira("Cloud Computing", "Tecnologia", "2-3 anos", 640, "Computação em Nuvem", "Salário médio: R$5.000 a R$12.000", ["ENEM 640+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("DevOps", "Tecnologia", "2-3 anos", 650, "Integração Contínua", "Salário médio: R$6.000 a R$15.000", ["ENEM 650+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("UX/UI Design", "Tecnologia", "2-3 anos", 580, "Experiência do Usuário", "Salário médio: R$4.000 a R$10.000", ["ENEM 580+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Internet das Coisas", "Tecnologia", "2-3 anos", 620, "Dispositivos Conectados", "Salário médio: R$5.000 a R$12.000", ["ENEM 620+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Blockchain", "Tecnologia", "2-3 anos", 640, "Criptomoedas, Ledger", "Salário médio: R$6.000 a R$15.000", ["ENEM 640+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Robótica", "Tecnologia", "4 anos", 660, "Robôs e Automação", "Salário médio: R$5.000 a R$12.000", ["ENEM 660+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Computação em Nuvem", "Tecnologia", "2-3 anos", 620, "AWS, Azure, GCP", "Salário médio: R$5.000 a R$12.000", ["ENEM 620+", "Tecnólogo"], "IFMA", ["Estácio"]);

// ========== HUMANAS (25 cursos) ==========
addCarreira("Direito", "Humanas", "5 anos", 710, "OAB obrigatória", "Salário médio: R$4.500 a R$8.000", ["Foco em redação", "ENEM 710+", "Graduação", "OAB"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "IESMA"]);
addCarreira("Letras - Português", "Humanas", "4 anos", 550, "Literatura, Linguística", "Salário médio: R$3.000 a R$6.500", ["ENEM 550+", "Graduação", "Estágio", "Pós"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "IESMA"]);
addCarreira("Letras - Inglês", "Humanas", "4 anos", 550, "Língua Inglesa", "Salário médio: R$3.000 a R$6.500", ["ENEM 550+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Letras - Espanhol", "Humanas", "4 anos", 535, "Língua Espanhola", "Salário médio: R$3.000 a R$6.000", ["ENEM 535+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("História", "Humanas", "4 anos", 560, "História Cultural", "Salário médio: R$3.000 a R$6.000", ["ENEM 560+", "Graduação", "Estágio"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "IESMA"]);
addCarreira("Geografia", "Humanas", "4 anos", 560, "Geoprocessamento", "Salário médio: R$3.000 a R$6.500", ["ENEM 560+", "Graduação", "Estágio"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Pedagogia", "Humanas", "4 anos", 615, "Gestão Escolar", "Salário médio: R$3.000 a R$6.500", ["ENEM 615+", "Graduação", "Estágio"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "IESMA", "Edufor"]);
addCarreira("Filosofia", "Humanas", "4 anos", 530, "Ética, Ensino", "Salário médio: R$2.800 a R$5.500", ["ENEM 530+", "Graduação", "Estágio"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Sociologia", "Humanas", "4 anos", 540, "Políticas Públicas", "Salário médio: R$3.000 a R$6.000", ["ENEM 540+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Jornalismo", "Humanas", "4 anos", 620, "Jornalismo Digital", "Salário médio: R$3.500 a R$7.500", ["ENEM 620+", "Graduação", "Estágio"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Publicidade e Propaganda", "Humanas", "4 anos", 600, "Marketing Digital", "Salário médio: R$3.500 a R$8.000", ["ENEM 600+", "Graduação"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Serviço Social", "Humanas", "4 anos", 575, "Políticas Públicas", "Salário médio: R$3.500 a R$6.500", ["ENEM 575+", "Graduação", "CRESS"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "IESMA", "Edufor"]);
addCarreira("Museologia", "Humanas", "4 anos", 550, "Conservação, Curadoria", "Salário médio: R$3.000 a R$6.000", ["ENEM 550+", "Graduação"], "UFMA", []);
addCarreira("Arquivologia", "Humanas", "4 anos", 515, "Gestão Documental", "Salário médio: R$3.000 a R$5.500", ["ENEM 515+", "Graduação"], "UFMA", []);
addCarreira("Biblioteconomia", "Humanas", "4 anos", 525, "Gestão de Acervos", "Salário médio: R$3.000 a R$5.500", ["ENEM 525+", "Graduação"], "UFMA", []);
addCarreira("Secretariado Executivo", "Humanas", "4 anos", 535, "Gestão Empresarial", "Salário médio: R$3.500 a R$6.000", ["ENEM 535+", "Graduação", "Idiomas"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Relações Públicas", "Humanas", "4 anos", 620, "Comunicação Estratégica", "Salário médio: R$3.500 a R$7.500", ["ENEM 620+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Economia", "Humanas", "4 anos", 640, "Finanças, Mercado", "Salário médio: R$5.000 a R$12.000", ["ENEM 640+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Ciências Políticas", "Humanas", "4 anos", 580, "Gestão Pública", "Salário médio: R$3.500 a R$8.000", ["ENEM 580+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Antropologia", "Humanas", "4 anos", 560, "Cultura, Sociedade", "Salário médio: R$3.000 a R$6.500", ["ENEM 560+", "Graduação"], "UFMA", []);
addCarreira("Arqueologia", "Humanas", "4 anos", 540, "Patrimônio, Escavações", "Salário médio: R$3.000 a R$6.000", ["ENEM 540+", "Graduação"], "UFMA", []);
addCarreira("Teologia", "Humanas", "4 anos", 520, "Estudos Religiosos", "Salário médio: R$2.500 a R$5.000", ["ENEM 520+", "Graduação"], "Não há pública", ["Estácio"]);
addCarreira("Comunicação Social", "Humanas", "4 anos", 600, "Comunicação Integrada", "Salário médio: R$3.500 a R$7.500", ["ENEM 600+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Relações Internacionais", "Humanas", "4 anos", 650, "Comércio Exterior", "Salário médio: R$4.000 a R$9.000", ["ENEM 650+", "Graduação", "Idiomas"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Letras - Libras", "Humanas", "4 anos", 520, "Língua Brasileira de Sinais", "Salário médio: R$3.000 a R$6.000", ["ENEM 520+", "Graduação"], "UEMA", ["Estácio"]);

// ========== NEGÓCIOS (15 cursos) ==========
addCarreira("Administração", "Negócios", "4 anos", 610, "MBA em Gestão", "Salário médio: R$6.000 a R$15.000", ["ENEM 610+", "Graduação", "Estágio"], "UFMA / UEMA", ["Estácio", "UNDB", "Uniceuma", "Edufor", "Faculdade Santa Terezinha"]);
addCarreira("Ciências Contábeis", "Negócios", "4 anos", 600, "Auditoria, Tributária", "Salário médio: R$4.000 a R$10.000", ["ENEM 600+", "Graduação", "CRC"], "UFMA", ["Estácio", "UNDB", "Uniceuma", "Faculdade Pitágoras"]);
addCarreira("Marketing", "Negócios", "2-3 anos", 605, "Marketing Digital", "Salário médio: R$4.000 a R$9.000", ["ENEM 605+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Logística", "Negócios", "2-3 anos", 520, "Supply Chain", "Salário médio: R$3.000 a R$7.000", ["ENEM 520+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Gestão de Recursos Humanos", "Negócios", "2-3 anos", 540, "Gestão de Pessoas", "Salário médio: R$3.000 a R$7.000", ["ENEM 540+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB", "Uniceuma", "Edufor"]);
addCarreira("Comércio Exterior", "Negócios", "2-3 anos", 575, "Logística Internacional", "Salário médio: R$3.500 a R$8.000", ["ENEM 575+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB"]);
addCarreira("Gestão Financeira", "Negócios", "2-3 anos", 595, "Finanças, Investimentos", "Salário médio: R$4.000 a R$9.000", ["ENEM 595+", "Tecnólogo"], "IFMA", ["Estácio", "UNDB"]);
addCarreira("Gestão Pública", "Negócios", "2-3 anos", 550, "Administração Pública", "Salário médio: R$3.500 a R$7.000", ["ENEM 550+", "Tecnólogo"], "IFMA", ["Estácio", "Edufor"]);
addCarreira("Gestão de E-commerce", "Negócios", "2 anos", 550, "Vendas Online", "Salário médio: R$3.500 a R$8.000", ["ENEM 550+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Gestão de Vendas", "Negócios", "2 anos", 530, "Força de Vendas", "Salário médio: R$3.500 a R$8.000", ["ENEM 530+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Gestão de Projetos", "Negócios", "2 anos", 560, "Gerenciamento", "Salário médio: R$4.000 a R$9.000", ["ENEM 560+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Empreendedorismo", "Negócios", "2 anos", 530, "Negócios Próprios", "Salário médio: Variável", ["ENEM 530+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Gestão de Custos", "Negócios", "2 anos", 540, "Controle Financeiro", "Salário médio: R$3.500 a R$7.000", ["ENEM 540+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Auditoria", "Negócios", "2 anos", 580, "Auditoria Contábil", "Salário médio: R$4.000 a R$9.000", ["ENEM 580+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Controladoria", "Negócios", "2 anos", 590, "Controle Gerencial", "Salário médio: R$5.000 a R$10.000", ["ENEM 590+", "Tecnólogo"], "IFMA", ["Estácio"]);

// ========== EXATAS (12 cursos) ==========
addCarreira("Matemática - Licenciatura", "Exatas", "4 anos", 590, "Ensino de Matemática", "Salário médio: R$3.500 a R$7.000", ["ENEM 590+", "Graduação", "Estágio"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Matemática - Bacharelado", "Exatas", "4 anos", 590, "Matemática Aplicada", "Salário médio: R$4.000 a R$9.000", ["ENEM 590+", "Graduação"], "UFMA", []);
addCarreira("Física - Licenciatura", "Exatas", "4 anos", 550, "Ensino de Física", "Salário médio: R$3.500 a R$7.000", ["ENEM 550+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Física - Bacharelado", "Exatas", "4 anos", 550, "Física de Materiais, Astrofísica", "Salário médio: R$4.000 a R$9.000", ["ENEM 550+", "Graduação", "Pesquisa"], "UFMA", []);
addCarreira("Química - Licenciatura", "Exatas", "4 anos", 570, "Ensino de Química", "Salário médio: R$3.500 a R$7.000", ["ENEM 570+", "Graduação"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Química - Bacharelado", "Exatas", "4 anos", 570, "Indústria, Pesquisa", "Salário médio: R$4.000 a R$9.000", ["ENEM 570+", "Graduação"], "UFMA", ["Estácio", "UNDB"]);
addCarreira("Química Industrial", "Exatas", "4 anos", 580, "Processos Industriais", "Salário médio: R$4.500 a R$10.000", ["ENEM 580+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Estatística", "Exatas", "4 anos", 600, "Análise de Dados", "Salário médio: R$5.000 a R$12.000", ["ENEM 600+", "Graduação"], "Não há pública", ["Estácio"]);
addCarreira("Matemática Aplicada", "Exatas", "4 anos", 620, "Modelagem Matemática", "Salário médio: R$5.000 a R$12.000", ["ENEM 620+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Física Médica", "Exatas", "4 anos", 600, "Radiologia, Diagnóstico", "Salário médio: R$5.000 a R$10.000", ["ENEM 600+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Bioquímica", "Exatas", "4 anos", 620, "Química Biológica", "Salário médio: R$4.500 a R$10.000", ["ENEM 620+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Ciência de Dados", "Exatas", "4 anos", 650, "Big Data Analytics", "Salário médio: R$6.000 a R$15.000", ["ENEM 650+", "Graduação"], "UFMA", ["Estácio"]);

// ========== AMBIENTAL (10 cursos) ==========
addCarreira("Agronomia", "Ambiental", "5 anos", 569, "Agronegócio", "Salário médio: R$4.500 a R$12.000", ["ENEM 569+", "Graduação", "CREA"], "UFMA", ["Uniceuma", "UNDB"]);
addCarreira("Medicina Veterinária", "Ambiental", "5 anos", 710, "Clínica Animal", "Salário médio: R$5.000 a R$12.000", ["ENEM 710+", "Graduação", "CRMV"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Ciências Biológicas", "Ambiental", "4 anos", 656, "Ecologia, Biotecnologia", "Salário médio: R$3.500 a R$7.000", ["ENEM 656+", "Graduação"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Gestão Ambiental", "Ambiental", "2-3 anos", 560, "Licenciamento Ambiental", "Salário médio: R$3.500 a R$7.000", ["ENEM 560+", "Tecnólogo"], "IFMA", ["Estácio", "Uniceuma"]);
addCarreira("Ecologia", "Ambiental", "4 anos", 600, "Biodiversidade, Ecossistemas", "Salário médio: R$3.500 a R$7.000", ["ENEM 600+", "Graduação"], "UFMA", []);
addCarreira("Saneamento Ambiental", "Ambiental", "2-3 anos", 535, "Tratamento de Água e Esgoto", "Salário médio: R$3.500 a R$7.000", ["ENEM 535+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Gestão de Recursos Hídricos", "Ambiental", "4 anos", 580, "Água, Saneamento", "Salário médio: R$4.000 a R$8.000", ["ENEM 580+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Gestão de Resíduos Sólidos", "Ambiental", "2-3 anos", 540, "Reciclagem, Tratamento", "Salário médio: R$3.500 a R$7.000", ["ENEM 540+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Educação Ambiental", "Ambiental", "4 anos", 550, "Sustentabilidade, Ensino", "Salário médio: R$3.000 a R$6.000", ["ENEM 550+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Energias Renováveis", "Ambiental", "2-3 anos", 600, "Solar, Eólica, Biogás", "Salário médio: R$5.000 a R$10.000", ["ENEM 600+", "Tecnólogo"], "IFMA", ["Estácio"]);

// ========== ARTES (15 cursos) ==========
addCarreira("Artes Visuais", "Artes", "4 anos", 530, "Artes Plásticas, Pintura, Escultura", "Salário médio: R$2.500 a R$6.000", ["ENEM 530+", "Graduação", "Portfólio"], "UFMA", []);
addCarreira("Teatro", "Artes", "4 anos", 530, "Artes Cênicas, Dramaturgia", "Salário médio: R$2.500 a R$5.000", ["ENEM 530+", "Graduação"], "UFMA", []);
addCarreira("Dança", "Artes", "4 anos", 510, "Dança, Coreografia", "Salário médio: R$2.500 a R$5.000", ["ENEM 510+", "Graduação"], "UFMA", []);
addCarreira("Música", "Artes", "4 anos", 525, "Educação Musical, Instrumento", "Salário médio: R$2.500 a R$5.500", ["ENEM 525+", "Graduação"], "UFMA", []);
addCarreira("Cinema e Audiovisual", "Artes", "4 anos", 600, "Produção Audiovisual, Direção", "Salário médio: R$3.000 a R$7.000", ["ENEM 600+", "Graduação", "Portfólio"], "UFMA", []);
addCarreira("Fotografia", "Artes", "2-3 anos", 520, "Fotografia Profissional", "Salário médio: R$2.500 a R$5.000", ["ENEM 520+", "Tecnólogo"], "Não há pública", ["Estácio"]);
addCarreira("Artes Cênicas", "Artes", "4 anos", 540, "Interpretação, Atuação", "Salário médio: R$2.500 a R$5.500", ["ENEM 540+", "Graduação"], "UFMA", []);
addCarreira("Cenografia", "Artes", "4 anos", 530, "Cenários, Figurinos", "Salário médio: R$2.500 a R$6.000", ["ENEM 530+", "Graduação"], "UFMA", []);
addCarreira("Ilustração", "Artes", "4 anos", 550, "Desenho, Quadrinhos", "Salário médio: R$2.800 a R$6.500", ["ENEM 550+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("História da Arte", "Artes", "4 anos", 540, "Crítica, Curadoria", "Salário médio: R$2.800 a R$6.000", ["ENEM 540+", "Graduação"], "UFMA", []);
addCarreira("Produção Audiovisual", "Artes", "4 anos", 580, "Produção para TV, Cinema", "Salário médio: R$3.000 a R$7.000", ["ENEM 580+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Animação", "Artes", "4 anos", 560, "Animação Digital, Stop Motion", "Salário médio: R$3.000 a R$7.000", ["ENEM 560+", "Graduação"], "UFMA", ["Estácio"]);
addCarreira("Design de Moda", "Artes", "4 anos", 540, "Estilismo, Criação de Moda", "Salário médio: R$2.800 a R$6.000", ["ENEM 540+", "Graduação", "Portfólio"], "Não há pública", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Design Gráfico", "Artes", "3-4 anos", 605, "UX/UI, Identidade Visual", "Salário médio: R$3.500 a R$8.000", ["ENEM 605+", "Graduação"], "UFMA", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Design de Interiores", "Artes", "3-4 anos", 560, "Ambientes, Decoração", "Salário médio: R$3.000 a R$7.000", ["ENEM 560+", "Graduação"], "Não há pública", ["UNDB", "Estácio"]);

// ========== MILITARES (7 cursos) ==========
addCarreira("CFO - Polícia Militar do Maranhão", "Militar", "4 anos (CFO)", "Vestibular específico UEMA", "Curso de Aperfeiçoamento de Oficiais", "Carreira mais concorrida do PAES 2026. Salário inicial durante curso: R$5.046,49. Salário de Oficial: R$8.000 a R$15.000", ["Ensino Médio completo", "Vestibular PAES - CFO da UEMA", "Prova objetiva e discursiva", "Teste de Aptidão Física (TAF)", "Curso de Formação de Oficiais (4 anos)"], "UEMA - CFO PMMA", []);
addCarreira("CFO - Corpo de Bombeiros Militar", "Militar", "4 anos (CFO)", "Vestibular específico UEMA", "Especializações em Salvamento e Prevenção", "2ª carreira mais concorrida do PAES 2026. Salário inicial durante curso: R$5.046,49. Salário de Oficial: R$8.000 a R$15.000", ["Ensino Médio completo", "Vestibular PAES - CFO da UEMA", "Provas objetivas", "Teste de Aptidão Física (TAF)", "Curso de Formação de Oficiais (4 anos)"], "UEMA - CFO CBMMA", []);
addCarreira("CFSD - Praça da Polícia Militar", "Militar", "1-2 anos (CFSD)", "Concurso público de nível médio", "Cursos para promoção a Cabo e Sargento", "Porta de entrada para carreira militar. Salário inicial: R$3.500 a R$5.000. Com promoções pode chegar a R$8.000", ["Ensino Médio completo", "Concurso público para Soldado", "Teste de Aptidão Física (TAF)", "Curso de Formação de Soldados", "Designação para batalhão"], "Centro de Formação da PMMA", []);
addCarreira("ESA - Sargento do Exército", "Militar", "2 anos (CFS)", "Concurso público nacional (ESA)", "Curso de Formação de Sargentos", "Carreira estável. Salário inicial: R$4.500. Com promoções pode chegar a R$8.000", ["Ensino Médio completo", "Concurso ESA (Exército)", "Prova objetiva", "Teste de Aptidão Física (TAF)", "Curso de Formação de Sargentos (2 anos)"], "Escola de Sargentos das Armas (ESA) - nacional", []);
addCarreira("EsPCEx - Exército Brasileiro", "Militar", "5 anos", "Concurso específico (EsPCEx)", "Oficial do Exército", "Carreira de oficial. Salário inicial: R$7.000. Após Academia: R$10.000 a R$20.000", ["Ensino Médio completo", "Concurso EsPCEx", "Provas objetivas e discursiva", "Teste de Aptidão Física (TAF)", "Academia Militar (5 anos)"], "Escola Preparatória de Cadetes do Exército (EsPCEx)", []);
addCarreira("AFA - Aeronáutica", "Militar", "4 anos", "Concurso específico (AFA)", "Oficial da Aeronáutica", "Carreira de oficial. Salário inicial: R$8.000. Após formação: R$10.000 a R$20.000", ["Ensino Médio completo", "Concurso AFA", "Provas objetivas", "Inspeção de Saúde", "Teste de Aptidão Física (TAF)", "Academia da Força Aérea (4 anos)"], "Academia da Força Aérea (AFA)", []);
addCarreira("EN - Marinha", "Militar", "4 anos", "Concurso específico (EN)", "Oficial da Marinha", "Carreira de oficial. Salário inicial: R$8.000. Após formação: R$10.000 a R$20.000", ["Ensino Médio completo", "Concurso EN - Escola Naval", "Provas objetivas", "Inspeção de Saúde", "Teste de Aptidão Física (TAF)", "Escola Naval (4 anos)"], "Escola Naval (EN)", []);

// ========== GASTRONOMIA (7 cursos) ==========
addCarreira("Gastronomia", "Gastronomia", "2-4 anos", 500, "Culinária, Cozinha", "Salário médio: R$2.500 a R$6.000", ["ENEM 500+", "Curso técnico/graduação"], "Não há pública", ["Estácio", "Senac"]);
addCarreira("Hotelaria", "Gastronomia", "2-4 anos", 500, "Gestão Hoteleira, Hospitalidade", "Salário médio: R$2.500 a R$6.000", ["ENEM 500+", "Graduação"], "IFMA", ["Estácio", "UNDB"]);
addCarreira("Turismo", "Gastronomia", "4 anos", 514, "Gestão de Viagens, Roteiros", "Nota UFMA: 514,32. Salário médio: R$2.800 a R$6.000", ["ENEM 514+", "Graduação"], "UFMA (São Bernardo)", ["Estácio", "UNDB", "Uniceuma"]);
addCarreira("Eventos", "Gastronomia", "2 anos", 510, "Produção de Eventos, Cerimonial", "Salário médio: R$2.500 a R$5.000", ["ENEM 510+", "Tecnólogo"], "IFMA", ["Estácio"]);
addCarreira("Panificação e Confeitaria", "Gastronomia", "2 anos", 480, "Panificação, Confeitaria", "Salário médio: R$2.500 a R$5.000", ["ENEM 480+", "Curso técnico"], "Não há pública", ["Senac"]);
addCarreira("Bebidas", "Gastronomia", "2 anos", 470, "Vinhos, Cervejas, Destilados", "Salário médio: R$2.500 a R$5.000", ["ENEM 470+", "Curso técnico"], "Não há pública", ["Senac"]);
addCarreira("Cozinha Brasileira", "Gastronomia", "2 anos", 460, "Culinária Regional", "Salário médio: R$2.500 a R$5.000", ["ENEM 460+", "Curso técnico"], "Não há pública", ["Senac"]);

// ============================================================
// PARTE 3: LISTA DE CURSOS, FUNÇÕES DE RENDERIZAÇÃO, AUTOCOMPLETE, SIDEBAR, PLAYER, SIMULAÇÃO ENEM
// ============================================================

// ============================================================
// LISTA DE CURSOS (TODOS OS 170+ CURSOS PARA AUTOCOMPLETE)
// ============================================================
const cursosList = [
    "Medicina", "Enfermagem", "Odontologia", "Fisioterapia", "Psicologia", "Nutrição", "Farmácia",
    "Educação Física", "Terapia Ocupacional", "Biomedicina", "Fonoaudiologia", "Radiologia",
    "Gerontologia", "Saúde Coletiva", "Educação Especial", "Estética e Cosmética", "Gestão Hospitalar",
    "Análises Clínicas", "Quiropraxia", "Podologia", "Acupuntura", "Homeopatia", "Massoterapia",
    "Auriculoterapia", "Fisioterapia Esportiva", "Enfermagem Obstétrica", "Farmácia Industrial",
    "Psicopedagogia", "Saúde Mental", "Gestão de Saúde",
    "Engenharia Civil", "Engenharia Elétrica", "Engenharia Mecânica", "Engenharia de Produção",
    "Engenharia Química", "Engenharia Ambiental", "Engenharia da Computação", "Engenharia de Petróleo",
    "Arquitetura e Urbanismo", "Engenharia de Alimentos", "Engenharia Naval", "Engenharia de Pesca",
    "Engenharia de Minas", "Engenharia de Materiais", "Engenharia Florestal", "Engenharia de Controle e Automação",
    "Engenharia Mecatrônica", "Engenharia de Telecomunicações", "Engenharia de Transportes",
    "Engenharia de Energia", "Engenharia de Segurança do Trabalho", "Engenharia de Software",
    "Ciência da Computação", "Sistemas de Informação", "Redes de Computadores",
    "Análise e Desenvolvimento de Sistemas", "Oceanografia", "Inteligência Artificial", "Ciência de Dados",
    "Segurança da Informação", "Banco de Dados", "Jogos Digitais", "Gestão da Tecnologia da Informação",
    "Cloud Computing", "DevOps", "UX/UI Design", "Internet das Coisas", "Blockchain", "Robótica",
    "Computação em Nuvem",
    "Direito", "Letras - Português", "Letras - Inglês", "Letras - Espanhol", "Letras - Francês",
    "Letras - Libras", "História", "Geografia", "Pedagogia", "Filosofia", "Sociologia", "Jornalismo",
    "Publicidade e Propaganda", "Serviço Social", "Museologia", "Arquivologia", "Biblioteconomia",
    "Secretariado Executivo", "Relações Públicas", "Economia", "Ciências Políticas", "Antropologia",
    "Arqueologia", "Teologia", "Comunicação Social", "Relações Internacionais",
    "Administração", "Ciências Contábeis", "Marketing", "Logística", "Gestão de Recursos Humanos",
    "Comércio Exterior", "Gestão Financeira", "Gestão Pública", "Gestão de E-commerce", "Gestão de Vendas",
    "Gestão de Projetos", "Empreendedorismo", "Gestão de Custos", "Auditoria", "Controladoria",
    "Matemática - Licenciatura", "Matemática - Bacharelado", "Física - Licenciatura", "Física - Bacharelado",
    "Química - Licenciatura", "Química - Bacharelado", "Química Industrial", "Estatística", "Matemática Aplicada",
    "Física Médica", "Bioquímica",
    "Agronomia", "Medicina Veterinária", "Ciências Biológicas", "Gestão Ambiental", "Ecologia",
    "Saneamento Ambiental", "Gestão de Recursos Hídricos", "Gestão de Resíduos Sólidos", "Educação Ambiental",
    "Energias Renováveis",
    "Artes Visuais", "Teatro", "Dança", "Música", "Cinema e Audiovisual", "Fotografia", "Artes Cênicas",
    "Cenografia", "Ilustração", "História da Arte", "Produção Audiovisual", "Animação", "Design de Moda",
    "Design Gráfico", "Design de Interiores",
    "CFO - Polícia Militar do Maranhão", "CFO - Corpo de Bombeiros Militar", "CFSD - Praça da PM",
    "ESA - Sargento do Exército", "EsPCEx - Exército Brasileiro", "AFA - Aeronáutica", "EN - Marinha",
    "Gastronomia", "Hotelaria", "Turismo", "Eventos", "Panificação e Confeitaria", "Bebidas", "Cozinha Brasileira"
];

// Atualizar contador no cabeçalho
const totalCursosSpan = document.getElementById("totalCursosContador");
if (totalCursosSpan) totalCursosSpan.innerText = cursosList.length;

// ============================================================
// CONTAGEM POR ÁREA
// ============================================================
const areasMap = {
    "Saúde": [], "Engenharias": [], "Tecnologia": [], "Humanas": [],
    "Negócios": [], "Artes": [], "Ambiental": [], "Militar": [], "Exatas": [], "Gastronomia": []
};

for (let key in carreirasSLZ) {
    let area = carreirasSLZ[key].area;
    if (areasMap[area]) areasMap[area].push(key);
}

function renderAreasGrid() {
    const grid = document.getElementById("areasGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const areasIcones = {
        "Saúde": "🏥", "Engenharias": "🏗️", "Tecnologia": "💻", "Humanas": "📚",
        "Negócios": "💼", "Artes": "🎨", "Ambiental": "🌿", "Militar": "⚔️", "Exatas": "🔬", "Gastronomia": "🍽️"
    };
    for (let [area, keys] of Object.entries(areasMap)) {
        if (keys.length === 0) continue;
        const card = document.createElement("div");
        card.className = "area-card";
        card.innerHTML = `
            <div class="area-icon">${areasIcones[area] || "📌"}</div>
            <h3>${area}</h3>
            <div class="area-count">${keys.length}</div>
            <div class="area-desc">carreiras</div>
        `;
        card.addEventListener("click", function(e) {
            let cursos = keys.map(k => carreirasSLZ[k].titulo).sort();
            document.getElementById("resultado").innerHTML = `
                <div class="area-cursos-lista">
                    <button class="close-btn" onclick="document.getElementById('resultado').innerHTML = '';">×</button>
                    <h2>${area} - ${cursos.length} carreiras disponíveis</h2>
                    <div>
                        ${cursos.map(curso => `<span class="curso-item" onclick="selecionarECarregarCurso('${curso.replace(/'/g, "\\'")}');">${curso}</span>`).join('')}
                    </div>
                    <div class="fonte">Clique em qualquer curso para ver os detalhes completos</div>
                </div>
            `;
        });
        grid.appendChild(card);
    }
}

function selecionarECarregarCurso(nomeCurso) {
    document.getElementById("pesquisa").value = nomeCurso;
    pesquisar();
}

function encontrarCarreira(termo) {
    let termoLower = termo.toLowerCase().trim();
    let termoLimp = termoLower.replace(/[^\w]/g, '');
    
    for (let key in carreirasSLZ) {
        let tituloLower = carreirasSLZ[key].titulo.toLowerCase();
        if (tituloLower === termoLower) return carreirasSLZ[key];
        if (tituloLower.replace(/[^\w]/g, '') === termoLimp) return carreirasSLZ[key];
    }
    
    for (let key in carreirasSLZ) {
        if (carreirasSLZ[key].titulo.toLowerCase().includes(termoLower)) return carreirasSLZ[key];
    }
    return null;
}

// ============================================================
// AUTOCOMPLETE
// ============================================================
const inputPesquisa = document.getElementById("pesquisa");
const autocompleteDiv = document.getElementById("autocomplete");

if (inputPesquisa) {
    inputPesquisa.addEventListener("input", function() {
        const value = this.value.toLowerCase();
        if (!value) { autocompleteDiv.style.display = "none"; return; }
        const filtered = cursosList.filter(curso => curso.toLowerCase().includes(value));
        if (filtered.length > 0) {
            autocompleteDiv.innerHTML = filtered.slice(0, 15).map(curso => `<div class="autocomplete-item">${curso}</div>`).join("");
            autocompleteDiv.style.display = "block";
            document.querySelectorAll(".autocomplete-item").forEach(item => {
                item.addEventListener("click", function() {
                    inputPesquisa.value = this.innerText;
                    autocompleteDiv.style.display = "none";
                    pesquisar();
                });
            });
        } else autocompleteDiv.style.display = "none";
    });
}

document.addEventListener("click", (e) => { if (e.target !== inputPesquisa && e.target !== autocompleteDiv) autocompleteDiv.style.display = "none"; });

// ============================================================
// RENDERIZAÇÃO DO GUIA
// ============================================================
function renderGuia(carreira) {
    const divResultado = document.getElementById("resultado");
    if (!carreira) {
        divResultado.innerHTML = `<div class="card-guia"><button class="close-btn" onclick="document.getElementById('resultado').innerHTML = '';">×</button>Nenhuma carreira encontrada. Tente: Medicina, Direito, Química, Engenharia...</div>`;
        return;
    }

    let publicaHTML = "";
    if (carreira.faculdades.publica && carreira.faculdades.publica !== "Não há pública") {
        publicaHTML = `<div class="faculdade-item faculdade-publica"><h4>${carreira.faculdades.publica}</h4><div class="badge-publica">Pública - Gratuita</div></div>`;
    } else {
        publicaHTML = `<div class="faculdade-item"><h4>Não há instituição pública com este curso em São Luís</h4></div>`;
    }

    let privadasList = [...(carreira.faculdades.privadas || [])];
    privadasList.sort((a,b) => { if(a === "Estácio") return -1; if(b === "Estácio") return 1; return 0; });
    let privadasHTML = "";
    if (privadasList.length > 0) {
        privadasHTML = `<h3>Instituições Privadas</h3>`;
        for (let f of privadasList) privadasHTML += `<div class="faculdade-item"><h4>${f}</h4><div style="font-size:0.85rem; color: var(--text-muted);">Oferece o curso em São Luís</div></div>`;
    }

    let rotaHTML = `<div class="rota"><strong>Rota de Formação:</strong><br>` + carreira.rota.map(p => `<div class="passo">${p}</div>`).join('') + `</div>`;

    divResultado.innerHTML = `
        <div class="card-guia">
            <button class="close-btn" onclick="document.getElementById('resultado').innerHTML = '';">×</button>
            <h2>${carreira.titulo}</h2>
            <div class="info-rapida">
                <div class="info-item"><strong>Área:</strong> ${carreira.area}</div>
                <div class="info-item"><strong>Duração:</strong> ${carreira.duracao}</div>
                <div class="info-item"><strong>Nota ENEM (SISU 2026):</strong> ${carreira.notaEnem} pontos</div>
                <div class="info-item"><strong>Especialização:</strong> ${carreira.residencia}</div>
                <div class="info-item"><strong>Mercado 2026:</strong> ${carreira.mercado}</div>
            </div>
            <h3>Onde cursar em São Luís</h3>
            ${publicaHTML}
            ${privadasHTML}
            ${rotaHTML}
            <div class="fonte">Fontes: SISU 2026 | MEC | Pesquisa de Mercado 2026 | São Luís - MA</div>
        </div>
    `;
    window.scrollTo({ top: divResultado.offsetTop - 20, behavior: "smooth" });
}

function pesquisar() {
    const termo = inputPesquisa.value;
    if (!termo.trim()) { alert("Digite o nome de uma carreira."); return; }
    const carreiraEncontrada = encontrarCarreira(termo);
    renderGuia(carreiraEncontrada);
}

// ============================================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ============================================================
const themeToggle = document.getElementById("themeToggle");
let isLight = false;
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        isLight = !isLight;
        if (isLight) { document.body.classList.add("light"); themeToggle.textContent = "☀️"; }
        else { document.body.classList.remove("light"); themeToggle.textContent = "🌙"; }
    });
}

// ============================================================
// PLAYER DE MÚSICA CORRIGIDO PARA CELULAR
// ============================================================
let audio = null;
let isPlaying = false;
const playBtn = document.getElementById("playMusicBtn");

function initAudio() {
    if (!audio) {
        audio = new Audio("songs/subay.mp3");
        audio.loop = true;
        audio.volume = 0.5;
    }
}

if (playBtn) {
    playBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        initAudio();
        
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = "▶";
            isPlaying = false;
            const musicStatus = document.getElementById("musicStatus");
            if (musicStatus) musicStatus.innerText = "Pausado";
        } else {
            audio.play().then(() => {
                playBtn.textContent = "⏸";
                isPlaying = true;
                const musicStatus = document.getElementById("musicStatus");
                if (musicStatus) musicStatus.innerText = "Tocando";
            }).catch(function(error) {
                console.log("Áudio bloqueado:", error);
                alert("Toque em qualquer lugar da tela primeiro, depois clique no play novamente.");
            });
        }
    });
}

document.body.addEventListener("touchstart", function() {
    initAudio();
    if (audio) audio.load().catch(() => {});
}, { once: true });

// ============================================================
// CONTROLE DA SIDEBAR
// ============================================================
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (document.getElementById("sidebarTotalCursos")) {
    document.getElementById("sidebarTotalCursos").innerText = cursosList.length;
}

function openSidebar() {
    if (sidebar) sidebar.classList.add("open");
    if (sidebarOverlay) sidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    if (sidebar) sidebar.classList.remove("open");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

if (sidebarToggle) sidebarToggle.addEventListener("click", openSidebar);
if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && sidebar && sidebar.classList.contains("open")) closeSidebar();
});

// ============================================================
// BOTÃO VOLTAR AO TOPO
// ============================================================
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>`;
backToTop.setAttribute('aria-label', 'Voltar ao topo');
document.body.appendChild(backToTop);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// FOOTER DINÂMICO
// ============================================================
const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `
    <p>📊 Dados SISU 2026 | 🎓 Fontes: UFMA, UEMA, IFMA, Estácio, UNDB, Uniceuma | 📍 São Luís - MA</p>
    <p style="margin-top: 8px;">🚀 Desenvolvido para orientação de carreira | <a href="#" id="creditosLink">Créditos</a></p>
`;
const container = document.querySelector('.container');
if (container) container.appendChild(footer);

const creditosLink = document.getElementById('creditosLink');
if (creditosLink) {
    creditosLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Desenvolvido como projeto de orientação profissional para São Luís - MA.\nDados atualizados para 2026.');
    });
}

// ============================================================
// TOOLTIP DINÂMICO NOS CARDS
// ============================================================
function updateAreaCardTooltips() {
    const cards = document.querySelectorAll('.area-card');
    cards.forEach(card => {
        const count = card.querySelector('.area-count')?.innerText;
        const areaName = card.querySelector('h3')?.innerText;
        if (count && areaName) card.setAttribute('data-tooltip', `${count} cursos em ${areaName}`);
    });
}

const originalRenderAreasGrid = renderAreasGrid;
renderAreasGrid = function() {
    originalRenderAreasGrid();
    updateAreaCardTooltips();
};

// ============================================================
// PARALLAX SUAVE NO FUNDO
// ============================================================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollY * 0.3}px`;
});

// ============================================================
// SIMULAÇÃO ENEM
// ============================================================
function simularNotaEnem() {
    const notaInput = document.getElementById("notaEnemInput");
    let nota = parseInt(notaInput.value);
    
    if (isNaN(nota) || nota < 0 || nota > 1000) {
        alert("Digite uma nota válida entre 0 e 1000.");
        return;
    }
    
    const cursosComNota = [];
    for (let key in carreirasSLZ) {
        let curso = carreirasSLZ[key];
        let notaCurso = null;
        
        if (typeof curso.notaEnem === 'number') {
            notaCurso = curso.notaEnem;
        } else if (typeof curso.notaEnem === 'string') {
            let notaExtraida = parseInt(curso.notaEnem);
            if (!isNaN(notaExtraida) && notaExtraida > 0 && notaExtraida <= 1000) {
                notaCurso = notaExtraida;
            }
        }
        
        if (notaCurso !== null) {
            cursosComNota.push({
                titulo: curso.titulo,
                nota: notaCurso,
                area: curso.area,
                diferenca: nota - notaCurso
            });
        }
    }
    
    const altaChance = cursosComNota.filter(c => c.diferenca >= 0).sort((a,b) => b.diferenca - a.diferenca);
    const mediaChance = cursosComNota.filter(c => c.diferenca < 0 && c.diferenca >= -40).sort((a,b) => b.diferenca - a.diferenca);
    const baixaChance = cursosComNota.filter(c => c.diferenca < -40).sort((a,b) => b.diferenca - a.diferenca);
    
    let melhorCurso = null;
    if (altaChance.length > 0) melhorCurso = altaChance[0];
    else if (mediaChance.length > 0) melhorCurso = mediaChance[0];
    else if (baixaChance.length > 0) melhorCurso = baixaChance[0];
    
    let html = `<div class="simulacao-resultado" style="animation: fadeInUp 0.5s ease-out forwards;">
        <div class="simulacao-header">
            <h3>🎯 Resultado da Simulação</h3>
            <div class="sua-nota-card">📝 Sua nota: ${nota} pontos</div>
        </div>`;
    
    if (melhorCurso) {
        const statusText = melhorCurso.diferenca >= 0 ? `✅ Você está ${melhorCurso.diferenca} pontos ACIMA da média` : `⚠️ Você está ${Math.abs(melhorCurso.diferenca)} pontos ABAIXO da média`;
        const statusColor = melhorCurso.diferenca >= 0 ? '#67ffe8' : '#ffaa44';
        html += `<div class="melhor-curso-card">
            <div class="melhor-curso-label">⭐ CURSO MAIS COMPATÍVEL</div>
            <div class="melhor-curso-nome">${melhorCurso.titulo}</div>
            <div class="melhor-curso-nota">Nota de corte: ${melhorCurso.nota} pontos</div>
            <div class="melhor-curso-diferenca" style="color: ${statusColor};">${statusText}</div>
        </div>`;
    }
    
    html += `<div class="categorias-grid">`;
    
    if (altaChance.length > 0) {
        html += `<div class="categoria-card alta">
            <div class="categoria-titulo">🟢 ALTA CHANCE (${altaChance.length} cursos)</div>
            <div class="cursos-simulacao">`;
        for (let c of altaChance) {
            html += `<div class="curso-simulacao-card" onclick="selecionarECarregarCurso('${c.titulo.replace(/'/g, "\\'")}');">
                <div class="curso-simulacao-nome">${c.titulo}</div>
                <div class="curso-simulacao-nota">Corte: ${c.nota} pts</div>
                <div class="curso-simulacao-diferenca">+${c.diferenca} pts</div>
            </div>`;
        }
        html += `</div></div>`;
    }
    
    if (mediaChance.length > 0) {
        html += `<div class="categoria-card media">
            <div class="categoria-titulo">🟡 CHANCE MÉDIA (${mediaChance.length} cursos)</div>
            <div class="cursos-simulacao">`;
        for (let c of mediaChance) {
            html += `<div class="curso-simulacao-card" onclick="selecionarECarregarCurso('${c.titulo.replace(/'/g, "\\'")}');">
                <div class="curso-simulacao-nome">${c.titulo}</div>
                <div class="curso-simulacao-nota">Corte: ${c.nota} pts</div>
                <div class="curso-simulacao-diferenca">${c.diferenca} pts</div>
            </div>`;
        }
        html += `</div></div>`;
    }
    
    if (baixaChance.length > 0) {
        html += `<div class="categoria-card baixa">
            <div class="categoria-titulo">🔴 BAIXA CHANCE (${baixaChance.length} cursos)</div>
            <div class="cursos-simulacao">`;
        for (let c of baixaChance) {
            html += `<div class="curso-simulacao-card" onclick="selecionarECarregarCurso('${c.titulo.replace(/'/g, "\\'")}');">
                <div class="curso-simulacao-nome">${c.titulo}</div>
                <div class="curso-simulacao-nota">Corte: ${c.nota} pts</div>
                <div class="curso-simulacao-diferenca">${c.diferenca} pts</div>
            </div>`;
        }
        html += `</div></div>`;
    }
    
    if (altaChance.length === 0 && mediaChance.length === 0 && baixaChance.length === 0) {
        html += `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum curso encontrado com nota de corte disponível.</div>`;
    }
    
    html += `</div>
        <div class="simulacao-footer">
            💡 Clique em qualquer curso para ver todos os detalhes
        </div>
    </div>`;
    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = html + (resultadoDiv.innerHTML || '');
    resultadoDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Adicionar evento ao botão de simulação
const btnSimular = document.getElementById("btnSimularNota");
if (btnSimular) btnSimular.addEventListener("click", simularNotaEnem);
const notaInputField = document.getElementById("notaEnemInput");
if (notaInputField) notaInputField.addEventListener("keypress", (e) => { if (e.key === "Enter") simularNotaEnem(); });

// ============================================================
// INICIALIZAÇÃO
// ============================================================
renderAreasGrid();
const btnBuscar = document.getElementById("btnBuscar");
if (btnBuscar) btnBuscar.addEventListener("click", pesquisar);
if (inputPesquisa) inputPesquisa.addEventListener("keypress", (e) => { if (e.key === "Enter") pesquisar(); });

