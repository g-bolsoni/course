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
      </section>
      {/* Main video */}
      {/* Testimonials */}
      <section >
        <div className="bg-gray">
            <div className="container mx-auto flex flex-wrap justify-center items-center gap-3.5 px-8 py-5">
                <h3 className="text-base lg:text-2xl w-full text-center">
                  Neste curso, você vai saber <b>exatamente</b> o que estudar para seu concurso.
                </h3>
                <h4 className="text-base lg:text-xl w-full text-center">
                  Vai saber os assuntos <b>mais pedidos</b> e vai aprendê-los <b>definitivamente</b>
                </h4>
                <p className="text-base lg:text-lg w-full text-center">
                  Para isso, você vai contar com um curso completo, <b>DO ABSOLUTO ZERO</b>, em que eu pego na sua mão e te levo até aos assuntos que são o <b>FILÉ MIGNON</b> das bancas!
                </p>
                <h3 className="mt-4 font-semibold text-xl">
                    Veja os resultados dos alunos que fizeram o curso:
                </h3>
            </div>
        </div>
        <Testimonials videoUrl= "https://www.youtube.com/embed/bkT5G5P9q6E" videoTitle = "Depoimento 1" color="gray"  />
        <Testimonials videoUrl= "https://www.youtube.com/embed/oKBRZbTmS_0" videoTitle = "Depoimento 2" color="white" invert />
        <Testimonials videoUrl= "https://www.youtube.com/embed/uggCX6lE6XU" videoTitle = "Depoimento 3" color="gray" />
        <Testimonials videoUrl= "https://www.youtube.com/embed/Dv56sQRKcvs" videoTitle = "Depoimento " color="white" invert />   
        <div className="container mx-auto px-8">
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
                O curso tem duração média de 60 dias, para você assistir com calma e fazer todos os exercícios. Mas é possível concluir todo o conteúdo em <b>apenas 30 dias!</b><br/><br/>Aqui você vai aprender:
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
            <h3 className="font-semibold text-2xl text-center mb-8"> 
              Saiba mais sobre o professor
            </h3>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
              <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
                <Image
                  className="rounded-xl"
                  src={teacher}
                  alt="Foto Perfil"
                />
              </div>
              <div className="w-full lg:w-3/5 text-lg font-normal tracking-wide">
                <p className="my-4">
                  Sou professor de português formado há mais de 10 anos, com mestrado na UNESP – Araraquara e concurseiro desde os 15 anos de idade.
                </p>
                <p className="my-4">
                  Já fui aprovado em dezenas de concursos e hoje sou Escrevente no Tribunal de Justiça de São Paulo.
                </p>
                <p className="my-4">
                  Sou professor em cursos preparatórios para concursos há mais de 2 anos.
                </p>
                <p className="my-4">
                  Ao longo da minha jornada, desenvolvi este método que facilita e entrega de bandeja os assuntos mais pedidos pelas bancas, para você não precisar estudar sempre todo o edital e, assim, ganhar tempo nos estudos.
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
          <h2 className="text-2xl font-semibold text-center mb-4 lg:mb-8">
            Como é o curso?
          </h2>
          <div className="flex flex-col gap-4 lg:gap-8 px-8">
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
          <h2 className="text-2xl font-semibold text-center mb-4 lg:mb-8">
            Bônus Exclusivo
          </h2>
          <div className="flex flex-col gap-4 lg:gap-8 px-8">
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
          <h2 className="text-2xl font-semibold text-center mb-4 lg:mb-8">
            Dúvidas Frequentes
          </h2>
          <ul className="px-8 ">
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
