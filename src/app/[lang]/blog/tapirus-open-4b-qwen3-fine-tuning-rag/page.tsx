import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/blog/PostLayout";
import {
  Callout,
  CodeBlock,
  H2,
  H3,
  InlineCode,
  LI,
  Lead,
  OL,
  P,
  Prose,
  ProseLink,
  Quote,
  UL,
} from "@/components/blog/Prose";
import { Button } from "@/components/ui/Button";
import { buildPostMetadata, requirePost } from "@/lib/blog";
import { LANGS, isLang } from "@/lib/i18n";

const SLUG = "tapirus-open-4b-qwen3-fine-tuning-rag";

/**
 * Public model on Hugging Face. Fill both in to light up the download CTA and
 * the model id inside the inference snippet — while empty, the post renders
 * without any broken link.
 */
const HF_URL = "";
const HF_MODEL_ID = "";

const BASE_MODEL = "Qwen/Qwen3-4B-Instruct-2507";

const post = requirePost(SLUG);

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/tapirus-open-4b-qwen3-fine-tuning-rag">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return buildPostMetadata(post, lang);
}

export default async function TapirusOpen4bPost({
  params,
}: PageProps<"/[lang]/blog/tapirus-open-4b-qwen3-fine-tuning-rag">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <PostLayout post={post} lang={lang}>
      {lang === "pt" ? <BodyPt /> : <BodyEn />}
    </PostLayout>
  );
}

function HuggingFaceCta({ label }: { label: string }) {
  if (!HF_URL) return null;

  return (
    <div>
      <Button href={HF_URL} external variant="primary" size="lg">
        {label}
      </Button>
    </div>
  );
}

const TRAINING_SAMPLE = `{"messages": [
  {"role": "system", "content": "Você é um assistente especializado em refaunação e restauração de interações ecológicas."},
  {"role": "user", "content": "Por que a perda de frugívoros de grande porte compromete a regeneração da floresta?"},
  {"role": "assistant", "content": "..."}
]}`;

const INFERENCE_SNIPPET = `from transformers import AutoModelForCausalLM, AutoTokenizer

MODEL_ID = "${HF_MODEL_ID || "<usuario>/<modelo>"}"

tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
model = AutoModelForCausalLM.from_pretrained(MODEL_ID, device_map="auto")

# Os trechos recuperados entram como contexto, não como conhecimento implícito.
messages = [
    {"role": "system", "content": SYSTEM_PROMPT},
    {"role": "user", "content": f"Contexto:\\n{retrieved_chunks}\\n\\nPergunta: {question}"},
]

inputs = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True, return_tensors="pt"
).to(model.device)

output = model.generate(inputs, max_new_tokens=512)`;

function BodyPt() {
  return (
    <Prose>
      <Lead>
        Modelos generalistas respondem sobre quase tudo — e é justamente por isso
        que respondem mal sobre refaunação. Quando a pergunta envolve
        reintrodução de espécies, dispersão de sementes por frugívoros ou
        restauração de interações ecológicas, o que sai costuma ser um texto
        fluente, plausível e impreciso. Foi esse incômodo que me levou a treinar
        um modelo próprio.
      </Lead>

      <P>
        O resultado é o <strong>Tapirus Open 4B</strong>: um modelo pequeno de
        linguagem, com pesos abertos, especializado em refaunação, conservação da
        biodiversidade e restauração de interações ecológicas. A base é o{" "}
        <InlineCode>{BASE_MODEL}</InlineCode>, sobre o qual apliquei fine tuning
        e, por cima, uma camada de RAG. Este texto é sobre as decisões de
        engenharia por trás disso — e sobre o que eu faria diferente.
      </P>

      <H2 id="ponto-cego">O ponto cego dos modelos generalistas</H2>

      <P>
        Um LLM treinado majoritariamente na web aberta aprende a distribuição do
        que é abundante. Literatura técnica de ecologia da restauração é
        exatamente o oposto disso: pouco volume, vocabulário próprio e muita
        nuance regional. Termos como defaunação, síndrome de dispersão, linha de
        base ecológica ou megafauna extinta aparecem raramente — e quando
        aparecem, vêm descolados do contexto de aplicação.
      </P>

      <P>
        Na prática isso produz dois tipos de erro. O primeiro é o mais óbvio: o
        modelo inventa interações entre espécies que não existem. O segundo é
        mais perigoso, porque passa despercebido: o modelo acerta o conceito
        geral, mas erra a escala, a região ou a espécie envolvida — e um texto
        bem escrito com o dado errado é pior do que uma recusa honesta.
      </P>

      <P>
        Havia dois caminhos. Ajustar prompts sobre um modelo grande, ou construir
        algo especializado. Prompt engineering melhora a forma da resposta, mas
        não cria conhecimento que não está lá.
      </P>

      <H2 id="por-que-slm">Por que um SLM, e não um LLM gigante</H2>

      <UL>
        <LI>
          <strong>Em escopo estreito, especialização vence tamanho.</strong> O
          modelo não precisa saber escrever SQL nem discutir política externa.
          Precisa acertar um domínio.
        </LI>
        <LI>
          <strong>Custo e latência.</strong> Um modelo de 4B responde rápido e
          barato o suficiente para ser usado de verdade, não apenas demonstrado.
        </LI>
        <LI>
          <strong>Execução local.</strong> Roda em GPU modesta e, quantizado, até
          em notebook. Para pesquisa de campo — onde conectividade é limitada e
          dados nem sempre podem sair do ambiente — isso deixa de ser detalhe e
          vira requisito.
        </LI>
        <LI>
          <strong>Reprodutibilidade.</strong> Pesos abertos permitem que outra
          pessoa verifique, critique e continue o trabalho.
        </LI>
      </UL>

      <Callout title="SLM na prática">
        Não há uma fronteira oficial, mas a leitura corrente trata como
        &ldquo;small language model&rdquo; os modelos na faixa de poucos bilhões
        de parâmetros — pequenos o bastante para rodar fora de um data center,
        grandes o bastante para sustentar uma conversa técnica com coerência.
      </Callout>

      <H2 id="modelo-base">Por que o Qwen3-4B-Instruct-2507</H2>

      <P>
        A escolha do modelo base foi menos sobre ranking em benchmark e mais
        sobre restrições concretas do projeto:
      </P>

      <UL>
        <LI>
          <strong>4 bilhões de parâmetros</strong> é o ponto de equilíbrio entre
          capacidade de raciocínio e hardware acessível.
        </LI>
        <LI>
          <strong>A variante Instruct</strong> já chega alinhada a diálogo, então
          o fine tuning parte de um comportamento conversacional útil em vez de
          construí-lo do zero.
        </LI>
        <LI>
          <strong>Desempenho consistente em português</strong>, que é o idioma do
          corpus e do público do Refauna.
        </LI>
        <LI>
          <strong>Janela de contexto longa</strong>, o que dá folga para os
          trechos recuperados pelo RAG sem espremer a pergunta do usuário.
        </LI>
        <LI>
          <strong>Licença permissiva</strong>, condição para publicar um derivado
          com pesos abertos.
        </LI>
      </UL>

      <Quote>
        A escolha do modelo base é uma decisão de arquitetura, não de placar.
        Licença, idioma, hardware e o que você pretende publicar depois pesam
        mais do que dois pontos em um benchmark.
      </Quote>

      <H2 id="fine-tuning-vs-rag">
        Fine tuning e RAG não competem: resolvem problemas diferentes
      </H2>

      <P>
        Essa talvez seja a confusão mais comum em projetos de IA aplicada. As
        duas técnicas são tratadas como alternativas — &ldquo;faço fine tuning ou
        uso RAG?&rdquo; — quando na verdade atacam camadas distintas do problema.
      </P>

      <UL>
        <LI>
          <strong>Fine tuning muda como o modelo fala.</strong> Tom, estrutura da
          resposta, vocabulário técnico, e — o mais subestimado — a disposição de
          recusar o que está fora do escopo.
        </LI>
        <LI>
          <strong>RAG muda o que o modelo sabe agora.</strong> Fatos verificáveis,
          com fonte citável, atualizáveis sem retreinar nada.
        </LI>
      </UL>

      <P>
        A regra prática que uso: se a resposta certa muda quando um documento
        novo entra na base, o problema é de RAG. Se o modelo tem a informação mas
        a expressa mal, fora do vocabulário do domínio, o problema é de fine
        tuning. No Refauna, os dois problemas existiam — por isso as duas
        técnicas.
      </P>

      <H2 id="pipeline">O pipeline, em quatro etapas</H2>

      <H3 id="dados">1. Preparação dos dados</H3>

      <P>
        O corpus do Refauna foi convertido em pares de instrução e resposta no
        chat template do próprio modelo base. Aqui a consistência de formato
        importa mais do que o volume: exemplos heterogêneos ensinam o modelo a
        ser heterogêneo.
      </P>

      <CodeBlock label="Formato de um exemplo de treino (JSONL)">
        {TRAINING_SAMPLE}
      </CodeBlock>

      <H3 id="treino">2. Fine tuning supervisionado</H3>

      <P>
        O ajuste é feito sobre a variante Instruct, preservando o comportamento
        conversacional que ela já tem. O risco principal nessa etapa é o
        esquecimento catastrófico: treinar demais em um domínio estreito degrada
        habilidades gerais que você ainda quer manter, como seguir instruções e
        escrever bem. Treino curto e avaliação frequente valem mais do que uma
        rodada longa.
      </P>

      <H3 id="avaliacao">3. Avaliação</H3>

      <P>
        Montei um conjunto de perguntas de validação e comparei as respostas lado
        a lado com as do modelo base. O critério que importa não é fluência — o
        modelo base já é fluente — e sim precisão factual dentro do domínio e
        honestidade nos limites: reconhecer o que não sabe é um resultado
        positivo, não uma falha.
      </P>

      <H3 id="rag">4. A camada de RAG</H3>

      <P>
        Com o modelo já especializado, o RAG entra para ancorar as respostas na
        base documental. O ganho de combinar as duas técnicas aparece aqui: um
        modelo que domina o vocabulário do domínio interpreta melhor os trechos
        recuperados, e erra menos ao sintetizá-los.
      </P>

      <CodeBlock label="Inferência com contexto recuperado (Python)">
        {INFERENCE_SNIPPET}
      </CodeBlock>

      <H2 id="open-weights">Por que publicar com pesos abertos</H2>

      <P>
        Publicar no Hugging Face não é sobre distribuição, é sobre escrutínio. Um
        modelo de domínio que não pode ser auditado por quem entende do domínio
        tem valor limitado. O model card, nesse contexto, é tão importante quanto
        os pesos: ele precisa declarar o escopo, os dados de origem, as
        limitações conhecidas e — principalmente — o que o modelo{" "}
        <strong>não</strong> deve ser usado para decidir.
      </P>

      <P>
        Um modelo especializado em conservação não substitui avaliação técnica de
        campo. Ele acelera leitura, síntese e formulação de hipóteses. Deixar
        isso explícito é parte da entrega.
      </P>

      <HuggingFaceCta label="Ver o modelo no Hugging Face" />

      <H2 id="licoes">O que eu levo para o próximo SLM</H2>

      <OL>
        <LI>
          <strong>Escopo estreito é vantagem, não limitação.</strong> Quanto mais
          claro o recorte, melhor o resultado por unidade de esforço.
        </LI>
        <LI>
          <strong>A licença do modelo base é decisão de produto.</strong> Ela
          determina o que você pode publicar no fim — e isso precisa ser
          verificado antes do primeiro treino, não depois.
        </LI>
        <LI>
          <strong>Qualidade e consistência dos dados superam volume.</strong>{" "}
          Poucos exemplos bem formatados batem muitos exemplos irregulares.
        </LI>
        <LI>
          <strong>Avalie contra o modelo base, sempre.</strong> Sem essa
          comparação você não sabe se o fine tuning ajudou ou apenas mudou o
          estilo da resposta.
        </LI>
        <LI>
          <strong>Fine tuning e RAG são camadas, não alternativas.</strong> Uma
          resolve forma, a outra resolve fato.
        </LI>
      </OL>

      <P>
        O Tapirus Open 4B continua em evolução. Se você trabalha com restauração
        ecológica, com modelos pequenos ou com os dois, tenho interesse genuíno
        em ouvir críticas — especialmente as técnicas. Fico à disposição no{" "}
        <ProseLink href="https://www.linkedin.com/in/iamrodrigocoelho/" external>
          LinkedIn
        </ProseLink>
        .
      </P>
    </Prose>
  );
}

function BodyEn() {
  return (
    <Prose>
      <Lead>
        General-purpose models answer almost anything — which is exactly why they
        answer poorly about refaunation. When the question involves species
        reintroduction, seed dispersal by frugivores, or the restoration of
        ecological interactions, what comes out is usually fluent, plausible and
        inaccurate. That friction is what led me to train a model of my own.
      </Lead>

      <P>
        The result is <strong>Tapirus Open 4B</strong>: an open-weights small
        language model specialized in refaunation, biodiversity conservation and
        the restoration of ecological interactions. It is built on{" "}
        <InlineCode>{BASE_MODEL}</InlineCode>, which I fine-tuned and then paired
        with a RAG layer. This post is about the engineering decisions behind it
        — and what I would do differently.
      </P>

      <H2 id="blind-spot">The blind spot of general-purpose models</H2>

      <P>
        An LLM trained mostly on the open web learns the distribution of what is
        abundant. Technical literature on restoration ecology is the opposite:
        low volume, its own vocabulary, and a lot of regional nuance. Terms like
        defaunation, dispersal syndrome, ecological baseline or extinct megafauna
        show up rarely — and when they do, they arrive detached from any applied
        context.
      </P>

      <P>
        In practice that produces two kinds of error. The first is obvious: the
        model invents interactions between species that don&rsquo;t exist. The
        second is more dangerous because it slips through: the model gets the
        general concept right but the scale, region or species wrong — and
        well-written text carrying a wrong fact is worse than an honest refusal.
      </P>

      <P>
        There were two paths: tune prompts on top of a large model, or build
        something specialized. Prompt engineering improves the shape of an
        answer, but it cannot create knowledge that isn&rsquo;t there.
      </P>

      <H2 id="why-slm">Why an SLM instead of a large LLM</H2>

      <UL>
        <LI>
          <strong>In a narrow scope, specialization beats size.</strong> The model
          doesn&rsquo;t need to write SQL or discuss foreign policy. It needs to
          get one domain right.
        </LI>
        <LI>
          <strong>Cost and latency.</strong> A 4B model is fast and cheap enough
          to actually be used, not just demoed.
        </LI>
        <LI>
          <strong>Local execution.</strong> It runs on a modest GPU and, when
          quantized, even on a laptop. For field research — limited connectivity,
          data that can&rsquo;t always leave the environment — that stops being a
          detail and becomes a requirement.
        </LI>
        <LI>
          <strong>Reproducibility.</strong> Open weights let someone else verify,
          challenge and continue the work.
        </LI>
      </UL>

      <Callout title="What counts as an SLM">
        There is no official boundary, but the common reading treats models in
        the low-billions parameter range as &ldquo;small language models&rdquo; —
        small enough to run outside a data center, large enough to hold a
        coherent technical conversation.
      </Callout>

      <H2 id="base-model">Why Qwen3-4B-Instruct-2507</H2>

      <P>
        Picking the base model had less to do with benchmark rankings than with
        the project&rsquo;s concrete constraints:
      </P>

      <UL>
        <LI>
          <strong>4 billion parameters</strong> is the sweet spot between
          reasoning capability and affordable hardware.
        </LI>
        <LI>
          <strong>The Instruct variant</strong> already arrives aligned for
          dialogue, so fine tuning starts from useful conversational behavior
          instead of building it from scratch.
        </LI>
        <LI>
          <strong>Consistent performance in Portuguese</strong>, the language of
          both the corpus and the Refauna audience.
        </LI>
        <LI>
          <strong>A long context window</strong>, which leaves room for retrieved
          passages without squeezing out the user&rsquo;s question.
        </LI>
        <LI>
          <strong>A permissive license</strong>, a precondition for publishing a
          derivative with open weights.
        </LI>
      </UL>

      <Quote>
        Choosing a base model is an architecture decision, not a scoreboard one.
        License, language, hardware and what you intend to publish afterwards
        weigh more than two points on a benchmark.
      </Quote>

      <H2 id="fine-tuning-vs-rag">
        Fine tuning and RAG don&rsquo;t compete: they solve different problems
      </H2>

      <P>
        This may be the most common confusion in applied AI projects. The two
        techniques get framed as alternatives — &ldquo;should I fine-tune or use
        RAG?&rdquo; — when they actually address different layers of the problem.
      </P>

      <UL>
        <LI>
          <strong>Fine tuning changes how the model speaks.</strong> Tone, answer
          structure, technical vocabulary, and — most underrated — its
          willingness to refuse what falls outside its scope.
        </LI>
        <LI>
          <strong>RAG changes what the model knows right now.</strong> Verifiable
          facts, with a citable source, updatable without retraining anything.
        </LI>
      </UL>

      <P>
        The rule of thumb I use: if the correct answer changes when a new
        document enters the corpus, it&rsquo;s a RAG problem. If the model has
        the information but expresses it badly, outside the domain&rsquo;s
        vocabulary, it&rsquo;s a fine tuning problem. Refauna had both — hence
        both techniques.
      </P>

      <H2 id="pipeline">The pipeline, in four stages</H2>

      <H3 id="data">1. Data preparation</H3>

      <P>
        The Refauna corpus was converted into instruction/response pairs using
        the base model&rsquo;s own chat template. Format consistency matters more
        than volume here: heterogeneous examples teach the model to be
        heterogeneous.
      </P>

      <CodeBlock label="Shape of a training example (JSONL)">
        {TRAINING_SAMPLE}
      </CodeBlock>

      <H3 id="training">2. Supervised fine tuning</H3>

      <P>
        Training runs on top of the Instruct variant, preserving the
        conversational behavior it already has. The main risk at this stage is
        catastrophic forgetting: overtraining on a narrow domain degrades general
        abilities you still want, like following instructions and writing well.
        Short runs with frequent evaluation beat one long run.
      </P>

      <H3 id="evaluation">3. Evaluation</H3>

      <P>
        I assembled a validation set of questions and compared answers
        side-by-side against the base model. The criterion that matters
        isn&rsquo;t fluency — the base model is already fluent — but factual
        precision inside the domain and honesty at its edges: acknowledging what
        it doesn&rsquo;t know is a positive result, not a failure.
      </P>

      <H3 id="rag">4. The RAG layer</H3>

      <P>
        With the model already specialized, RAG grounds answers in the document
        base. This is where combining both techniques pays off: a model fluent in
        the domain&rsquo;s vocabulary interprets retrieved passages better, and
        makes fewer mistakes synthesizing them.
      </P>

      <CodeBlock label="Inference with retrieved context (Python)">
        {INFERENCE_SNIPPET}
      </CodeBlock>

      <H2 id="open-weights">Why publish with open weights</H2>

      <P>
        Publishing on Hugging Face isn&rsquo;t about distribution, it&rsquo;s
        about scrutiny. A domain model that can&rsquo;t be audited by people who
        know the domain has limited value. The model card matters as much as the
        weights: it has to state the scope, the source data, the known
        limitations and — above all — what the model should{" "}
        <strong>not</strong> be used to decide.
      </P>

      <P>
        A model specialized in conservation does not replace technical field
        assessment. It speeds up reading, synthesis and hypothesis framing.
        Making that explicit is part of shipping it.
      </P>

      <HuggingFaceCta label="View the model on Hugging Face" />

      <H2 id="lessons">What I&rsquo;m taking to the next SLM</H2>

      <OL>
        <LI>
          <strong>A narrow scope is an advantage, not a limitation.</strong> The
          sharper the boundary, the better the result per unit of effort.
        </LI>
        <LI>
          <strong>The base model&rsquo;s license is a product decision.</strong>{" "}
          It determines what you can publish at the end — and that needs checking
          before the first training run, not after.
        </LI>
        <LI>
          <strong>Data quality and consistency beat volume.</strong> A few
          well-formatted examples outperform many irregular ones.
        </LI>
        <LI>
          <strong>Always evaluate against the base model.</strong> Without that
          comparison you can&rsquo;t tell whether fine tuning helped or just
          changed the style of the answer.
        </LI>
        <LI>
          <strong>Fine tuning and RAG are layers, not alternatives.</strong> One
          solves form, the other solves fact.
        </LI>
      </OL>

      <P>
        Tapirus Open 4B is still evolving. If you work with ecological
        restoration,
        with small models, or with both, I&rsquo;m genuinely interested in
        criticism — especially the technical kind. I&rsquo;m around on{" "}
        <ProseLink href="https://www.linkedin.com/in/iamrodrigocoelho/" external>
          LinkedIn
        </ProseLink>
        .
      </P>
    </Prose>
  );
}
