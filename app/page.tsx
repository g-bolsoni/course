'use client';

import Image from "next/image";
import image from "@/public/scholl.svg";
import teacher from '@/public/guilherme.png';

import { Button } from "./components/Button";
import { Testimonials } from "./components/Testimonials";
import FaqItem from "./components/FaqItem";

export default function Home(this: any) {
  const faqs = [
    {
      question: 'Eu preciso ter conhecimento prévio para fazer o curso?',
      answer:
        'R. NÃO! O curso começa do mais absoluto zero, desde separação silábica até conceitos avançados de sintaxe. Tudo explicado com calma, de maneira organizada e didática, para você nunca mais esquecer.',
    },
    {
      question: 'E se eu tiver dúvidas?',
      answer: 'R. Você terá suporte em todas as suas dúvidas, por nosso canal no Telegram ou por e-mail, do jeito que preferir! Além disso, teremos os encontros quinzenais da turma, em que você poderá falar comigo AO VIVO e tirar todas as dúvidas.',
    },
    {
      question: 'Mas eu não tenho tempo?',
      answer: 'R. O curso é gravado e o acesso é vitalício! Você pode assistir a qualquer hora, de qualquer lugar, inclusive do celular. Assim, você pode organizar a melhor maneira de estudar.',
    }
  ];

  return (
    <main className="">
      {/* Intro to the course */}
      <section className="bg-blue flex justify-center items-center h-52 lg:h-60 ">
        <div className="container flex justify-center items-center lg:justify-start lg:gap-16">
          <div className="px-8 lg:w-3/5 lg:px-0 lg:pr-8">
            <p className="text-white font-bold text-base lg:text-lg">
              Veja como pessoas comuns estão sendo aprovadas em concursos com esse método específico para aprender português para concurso.
            </p>
          </div>
          <div className="hidden lg:block ">
            <Image
              className="aspect-square rounded-lg"
              src={image}
              alt="image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
      {/* Intro to the course */}
      {/* Main video */}
      {/*
      <section className="my-8 lg:mt-16">
        <div className="container mx-auto px-8">
            <h2 className="font-medium text-lg lg:text-3xl flex items-center justify-center">
              Assista o vídeo abaixo para me conhecer melhor e um pouco do meu método
            </h2>
            <div className="flex items-center justify-center h-96 my-8">
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/DeVsfHet-uA?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                >
                </iframe>
            </div>
            <div className="flex justify-center">
              <Button />
            </div>
        </div>
      </section>*/}
      {/* Main video */}
      {/* Testimonials */}
      <section>
        <div className="bg-gray">
          <div className="container mx-auto flex flex-wrap justify-start items-center gap-3.5 md:px-0 px-8 py-5">
            <h3 className="text-base lg:text-3xl w-full text-left">
              Neste curso, você vai saber <b>exatamente</b> o que estudar para seu concurso.
            </h3>
            <h4 className="text-base lg:text-xl w-full text-left">
              Vai saber os assuntos <b>mais pedidos</b> e vai aprendê-los <b>definitivamente</b>
            </h4>
            <p className="text-base lg:text-lg w-full text-left">
              Para isso, você vai contar com um curso completo, <b>DO ABSOLUTO ZERO</b>, em que eu pego na sua mão e te levo até aos assuntos que são o <b>FILÉ MIGNON</b> das bancas!
            </p>
            <h3 className="mt-4 font-semibold text-xl">
              Veja os resultados dos alunos que fizeram o curso:
            </h3>
          </div>
        </div>
        <Testimonials
          videoUrl="https://www.youtube.com/embed/bkT5G5P9q6E"
          videoTitle="Depoimento 1"
          color="gray"
          testimonial="<span>Meu nome é Thiago Viana, residente em Bebedouro, com 39 anos de idade. Dedico-me a prestar concursos desde os 19 anos. Este ano, surgiu um edital para o concurso da SAEB, oferecendo uma vaga de assessor de imprensa. Já formado em Publicidade e Propaganda e com experiência em concursos anteriores, decidi candidatar-me. Contudo, como fazia tempo que não estudava, senti a necessidade de investir em um preparatório, onde tive o prazer de conhecer Guilherme, meu professor de Português.</span><span>Guilherme compartilhou diversas dicas valiosas, e, surpreendentemente, muitas das questões que apareceram na prova já haviam sido tratadas em nossos exercícios em sala. Com sua ajuda, conquistei o 1º lugar no concurso e agora aguardo ansiosamente pela minha nomeação. As aulas eram extremamente didáticas, facilitando o aprendizado de maneira eficaz. Sempre que surgia alguma dúvida, Guilherme não hesitava em pausar e esclarecer os pontos até que todos compreendessem completamente o conteúdo. Posso assegurar: ele é um professor excepcional. Confie no curso; eu garanto que vale a pena ❤️.</span>"
        />

        <Testimonials
          videoUrl="https://www.youtube.com/embed/oKBRZbTmS_0"
          videoTitle="Depoimento 2"
          color="white"
          invert
          testimonial="<span>Meu nome é Ana Carolina, e vim compartilhar minha experiência com o curso de Língua Portuguesa. Há algum tempo, venho prestando concursos e, ao analisar minhas provas, percebi que, embora dominasse os conhecimentos específicos, meu desempenho em Língua Portuguesa estava afetando negativamente minha classificação. Iniciei o curso no início de 2021 e o frequentei durante todo o ano. Um dos diferenciais é a possibilidade de começar do básico e progredir até o avançado. Após as aulas ao longo do ano, conquistei a aprovação em dois concursos públicos: o primeiro no início deste ano e o segundo, mais recentemente, no final do ano. Atualmente, sou professora concursada na rede municipal de Guariba. Recomendo enfaticamente o curso, especialmente se combinado a uma rotina de estudos dedicada❤️.</span>"
        />

        <Testimonials
          videoUrl="https://www.youtube.com/embed/uggCX6lE6XU"
          videoTitle="Depoimento 3"
          color="gray"
          testimonial="<span>Meu nome é Luciana, e participei do curso ministrado pelo professor Guilherme, que incluiu aulas ao vivo. A didática do professor Guilherme é excepcional. Ele demonstra paciência, revisita explicações quantas vezes forem necessárias, e se assegura de que ninguém termine a aula com dúvidas. Além disso, ele incorpora exercícios práticos durante as aulas e traz questões de concursos públicos anteriores para resolvermos juntos. A língua portuguesa sempre representou um grande desafio para mim nos processos seletivos. No entanto, este ano, após concluir o curso do professor Guilherme, obtive o 1º lugar no processo seletivo da prefeitura municipal de Bebedouro, para o cargo de professora de educação infantil 2, acertando todas as questões de português. Além disso, fui aprovada em outro concurso público, conquistando a 3ª colocação para professora de educação especial.</span><span>O curso do professor Guilherme transformou minha vida❤️. Sempre enfrentei dificuldades significativas em língua portuguesa, mas, com este curso, alcancei um desempenho excepcional nessa disciplina.</span>"
        />

        <Testimonials
          videoUrl="https://www.youtube.com/embed/Dv56sQRKcvs"
          videoTitle="Depoimento"
          color="white"
          invert
          testimonial="<span>Meu nome é Marcia, e sou aluna do professor Guilherme, participando de dois cursos conduzidos por ele: um voltado para o concurso de Bebedouro e outro para o de Ribeirão Preto. No concurso de Bebedouro, obtive a 7ª colocação para a posição de PEB 1 e a 43ª para professora de educação infantil 2. No concurso de Ribeirão Preto, alcancei a 13ª posição. Além disso, aplicando os conhecimentos adquiridos no curso a outros concursos, consegui excelentes resultados, com aprovação na 33ª posição em um concurso em Sertãozinho e na 18ª posição em Pontal. </span><span>O Guilherme é um professor que realmente nos envolve em suas aulas, e isso faz toda a diferença para o nosso aprendizado. Ele dedica-se a resolver muitos exercícios direcionados especificamente aos concursos que estamos nos preparando para enfrentar, o que faz com que a maioria das questões abordadas em aula apareça nas provas. O curso é maravilhoso, e só tenho a agradecer ao professor Guilherme por todo o conhecimento compartilhado❤️.</span>"
        />

        <div className="container mx-auto px-8 md:px-0">
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </section>
      {/* Testimonials */}
      {/* Topics */}
      <section className="bg-gray py-6 px-8 mt-8">
        <div className="container mx-auto ">
          <div className="text-lg">
            <div className="styles.content">
              <h2 className="text-base font-medium lg:text-lg">
                O curso tem duração média de 60 dias, para você assistir com calma e fazer todos os exercícios. Mas é possível concluir todo o conteúdo em <b>apenas 30 dias!</b><br /><br />Aqui você vai aprender:
              </h2>
              <ul className="list-disc ml-7 text-base lg:text-lg">
                <li>Acentuação (pra nunca mais esquecer!)</li>
                <li>Formação das Palavras</li>
                <li>Classes de Palavras: Substantivos, Pronomes, Verbos, Conjunções...</li>
                <li>Tempos e Modos Verbais</li>
                <li>Análise Sintática: Sujeito, Predicado, Complementos Verbais e Nominais, Aposto, Adjuntos Adnominais etc.</li>
                <li>Crase (te mostro os casos mais pedidos – nunca mais erre crase!)</li>
                <li>Concordância Verbal e Nominal – (e eu também te falo quais são os casos mais pedidos em concursos)</li>
                <li>Uso da vírgula</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Topics */}
      {/* About the teacher */}
      <section>
        <div className="bg-gray flex items-center justify-center flex-col pb-14">
          <div className="container mt-4 px-8">
            <h3 className="font-semibold md:text-3xl text-2xl text-left mb-8">
              Saiba mais sobre o professor
            </h3>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
              <div className="lg:w-2/5 w-full flex justify-center lg:justify-start">
                <Image
                  className="rounded-xl"
                  src={teacher}
                  width={400}
                  alt="Foto Perfil"
                />
              </div>
              <div className="w-full lg:w-3/5 tracking-wide">
                <p className="my-4 text-lg font-normal">
                  Sou um dedicado professor de português, atuando na área há mais de uma década, com uma sólida formação acadêmica evidenciada pelo meu mestrado obtido na UNESP – Araraquara. Minha trajetória em concursos públicos começou cedo, aos 15 anos de idade, uma paixão que me levou a ser aprovado em dezenas de concursos ao longo dos anos. Atualmente, ocupo a posição de Escrevente no Tribunal de Justiça de São Paulo, uma conquista que reflete meu comprometimento e habilidade.
                </p>
                <p className="my-4 text-lg font-normal">
                  Nos últimos dois anos, tenho compartilhado meu conhecimento e experiência como professor em cursos preparatórios para concursos. Durante minha jornada, desenvolvi um método inovador que simplifica o aprendizado e destaca os tópicos mais relevantes frequentemente cobrados pelas bancas examinadoras. Esse método é projetado para otimizar seus estudos, permitindo que você se concentre no que realmente importa, evitando a necessidade de revisar todo o edital. O objetivo é maximizar seu tempo de estudo, garantindo que você esteja bem preparado para enfrentar os desafios dos concursos.
                </p>
              </div>
            </div>
            <div className="container mx-auto mt-8 px-8">
              <div className="flex justify-center">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About the teacher */}
      {/* About Course */}
      <section className="my-5 lg:my-10">
        <div className="container mx-auto">
          <h2 className="md:text-3xl text-2xl font-semibold text-center md:text-left mb-4 lg:mb-8">
            Como é o curso?
          </h2>
          <div className="flex flex-col gap-4 lg:gap-8 px-8 md:px-0">
            <p className="text-base lg:text-lg font-normal text-left">
              Em mais de 50 aulas gravadas, vou te levar <b>DO ZERO</b> ao <b>FILÉ MIGNON</b>, ou seja, aos assuntos mais recorrentes nas provas, para você nunca mais temer Português.
            </p>
            <p className="text-base lg:text-lg font-normal text-left">
              Além disso, o curso conta também com 13 vídeos <b>EXCLUSIVOS</b> de <b>RESOLUÇÃO DE QUESTÕES REAIS E ATUAIS</b> de concursos, em que eu te ensino, <b>NA PRÁTICA</b>, a aplicar tudo o que você aprendeu no curso para resolver questões de maneira eficiente, com muita assertividade.
            </p>
          </div>
        </div>
      </section>
      {/* About Course */}
      {/* Exclusive bonus */}
      <section className="bg-gray py-5 lg:py-10">
        <div className="container mx-auto">
          <h2 className="md:text-3xl text-2xl font-semibold text-center md:text-left mb-4 lg:mb-8">
            Bônus Exclusivo
          </h2>
          <div className="flex flex-col gap-4 lg:gap-8 px-8 md:px-0">
            <span className="text-lg lg:text-xl font-normal">Nesta oferta, você vai ter acesso a muitos bônus:</span>
            <ul className="list-disc ml-7">
              <li className="text-base lg:text-lg mb-2">Acesso à minha <b>APOSTILA EM PDF</b>, com todo o conteúdo das aulas e mais exercícios atualizados de concursos para treinar ao final de cada capítulo.</li>
              <li className="text-base lg:text-lg mb-2">Essa apostila é vendida por R$89,90 aos meu alunos, de maneira separada. Mas, comprando nesta oferta, você vai levá-la <b>INTEIRAMENTE GRÁTIS</b>.</li>
              <li className="text-base lg:text-lg mb-2">Lives para tirar dúvidas: Apenas os alunos desta oferta terão acesso a encontros quinzenais, em que eu <b>PESSOALMENTE</b> tirarei as dúvidas dos alunos. Claro, como não consigo atender a todos, esse bônus é limitado <b>A QUEM COMPRAR NESTA OFERTA</b>.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Exclusive bonus */}
      {/* FAQ */}
      <section className="my-5">
        <div className="container mx-auto">
          <h2 className="md:text-3xl text-2xl font-semibold text-center md:text-left mb-4 lg:mb-8">
            Dúvidas Frequentes
          </h2>
          <ul className="px-8 md:px-0">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </ul>

        </div>
      </section>
      {/* FAQ */}
    </main>
  )
}
