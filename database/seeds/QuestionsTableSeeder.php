<?php

use App\Question;
use App\User;
use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $user1 = User::find(1);
        $user2 = User::find(2);

        $question = Question::create([
            'content' =>
                '<p>(Univ. Fed. Viçosa) O plural dos nomes compostos está correto em todas as alternativas, exceto:</p>',
            'tags' => 'Gramatica,Substantivo',
            'alternativeA' =>
                '<p>Ele gosta de amores-perfeitos e cultiva-os.</p>',
            'alternativeB' =>
                '<p>Os vice-diretores reunir-se-ão na próxima semana</p>',
            'alternativeC' => '<p>As aulas serão dadas às segundas-feiras</p>',
            'alternativeD' => '<p>Há muitos beijas-flores no seu quintal</p>',
            'alternativeE' => '<p>A moda está voltando às saias-balão.</p>',
            'correctAlternative' => 'c',
            'subject_id' => 1
        ]);

        $user1->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' =>
                '<p>Um avião percorreu a distância de 5 000 metros na posição inclinada, e em relação ao solo, percorreu 3 000 metros. Determine a altura do avião</p>',
            'tags' => 'Teorema de Pitágoras, Matemática',
            'alternativeA' => '<p>3000</p>',
            'alternativeB' => '<p>4000</p>',
            'alternativeC' => '<p>5000</p>',
            'alternativeD' => '<p>3800</p>',
            'alternativeE' => null,
            'correctAlternative' => 'b',
            'subject_id' => 8
        ]);

        $user1->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' => "<p>Calcule a metragem de arame utilizado para cercar um terreno triangular com as medidas
perpendiculares de 60 e 80 metros, considerando que a cerca de arame terá 4 fios. &nbsp;</p>",
            'tags' => 'Teorema de Pitagoras,Geometria',
            'alternativeA' => '<p>240</p>',
            'alternativeB' => '<p>260</p>',
            'alternativeC' => '<p>270</p>',
            'alternativeD' => '<p>280</p>',
            'alternativeE' => '<p>300</p>',
            'correctAlternative' => 'a',
            'subject_id' => 8
        ]);

        $user1->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' => '<p>Vamos supor que temos um bloco de massa m = 5 kg sobre uma superfície plana. Suponhamos que o coeficiente de atrito entre o bloco e a superfície plana seja igual a 0,2, determine o valor da força
de atrito para uma força que puxa o bloco com intensidade igual a 50 N.</p><figure class="image"><img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/plano-inclinado-exercicio-1.jpg" alt=""></figure>",
         "tags" => "Dinâmica, Plano Inclinado, Newton',
            'alternativeA' => '<p>5N</p>',
            'alternativeB' => '<p>20N</p>',
            'alternativeC' => '<p>100N</p>',
            'alternativeD' => '<p>0</p>',
            'alternativeE' => '<p>50N</p>',
            'correctAlternative' => 'b',

            'subject_id' => 10
        ]);

        $user1->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' =>
                '<p>Sabendo que a massa atômica do magnésio é igual a 24 u, determine a massa, em gramas, de um átomo desse elemento. (Dado: Número de Avogadro = 6,0 . 10²³).</p>',
            'tags' => 'Mol, Numero Avogrado',
            'alternativeA' => '<p>24g</p>',
            'alternativeB' => '<p>4g</p>',
            'alternativeC' => '<p>24 . 10-²³ g</p>',
            'alternativeD' => '<p>4 . 10²³ g</p>',
            'alternativeE' => '<p>4 . 10-²³ g</p>',
            'correctAlternative' => 'e',

            'subject_id' => 9
        ]);

        $user1->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' => '<p>(Fuvest-SP) A tabela abaixo apresenta o mol, em gramas, de várias substâncias:</p><figure class="image"><img src="https://s3.static.brasilescola.uol.com.br/img/2014/07/mol-de-substancias.jpg" alt="Tabela com mol de substâncias"></figure><p><br>Tabela com mol de substâncias</p><p>Comparando massas iguais
dessas substâncias, a que apresenta maior número de moléculas é</p>',
            'tags' => 'Massa molar, Tabela Periódica',
            'alternativeA' => '<p>Au</p>',
            'alternativeB' => '<p>HCl</p>',
            'alternativeC' => '<p>O3</p>',
            'alternativeD' => '<p>C5H12</p>',
            'alternativeE' => '<p>H20</p>',
            'correctAlternative' => 'e',

            'subject_id' => 9
        ]);

        $user2->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' =>
                '<p>(FUVEST-SP/2002) “Na presidência da República, em regime que atribui ampla autoridade e poder pessoal ao chefe de governo, o Sr. João Goulart constituir-se-á, sem dúvida alguma, no mais evidente incentivo a todos aqueles que desejam ver o país mergulhado no caos, na anarquia, na luta civil.” (Manifesto dos ministros militares à Nação, em 29 de agosto de 1961).</p><p>Esse Manifesto revela que os militares</p>',
            'tags' => 'Regime Militar',
            'alternativeA' =>
                '<p>estavam excluídos de qualquer poder no regime de democracia presidencial.</p>',
            'alternativeB' =>
                '<p>eram favoráveis à manutenção do regime democrático e parlamentarista.</p>',
            'alternativeC' =>
                '<p>justificavam uma possibilidade de intervenção armada em regime democrático.</p>',
            'alternativeD' =>
                '<p>apoiavam a interferência externa nas questões de política interna do país.</p>',
            'alternativeE' =>
                '<p>eram contrários ao regime socialista implantado pelo presidente em exercício.</p>',
            'correctAlternative' => 'c',

            'subject_id' => 4
        ]);

        $user2->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' =>
                '<p>O rompimento pelos nazistas do Pacto Germano-Soviético firmado entre a Alemanha e a União das Repúblicas Socialistas Soviéticas (URSS), no ano de 1939, fez com que a União Soviética entrasse na Segunda Guerra em 1943. O que foi o Pacto Germano-Soviético?</p>',
            'tags' => 'Segunda Guerra Mundial',
            'alternativeA' =>
                '<p>Política de acordos efetivada por Hitler e Churchill.</p>',
            'alternativeB' =>
                '<p>Efetivação do Pacto <i>anti-Komintern</i> entre Alemanha, URSS e Japão.</p>',
            'alternativeC' =>
                '<p>Política de acordos entre Hitler e Stálin de não agressão e neutralidade entre Alemanha e União Soviética por dez anos.</p>',
            'alternativeD' => "<p>Pacto que assegurava à Alemanha o direito de incorporar territórios poloneses com
a permissão da França e da Inglaterra.</p>",
            'alternativeE' =>
                '<p>Política de não agressão entre Alemanha, Inglaterra, Japão e França.</p>',
            'correctAlternative' => 'c',

            'subject_id' => 4
        ]);

        $user2->myQuestions()->attach($question->id, ['relation' => 'owner']);

        $question = Question::create([
            'content' =>
                '<p>Os Estados Unidos entraram fundamentalmente na Segunda Guerra Mundial no ano de 1941. Quais foram os principais fatores que causaram a entrada dos Estados Unidos na guerra?</p>',
            'tags' => 'Segunda Guerra Mundial',
            'alternativeA' => '<p>A ocupação nazista da Rússia em 1941.</p>',
            'alternativeB' => "<p>O confronto dos Estados Unidos com a marinha japonesa na Batalha de Midway no ano
de 1942.</p>",
            'alternativeC' =>
                '<p>A incorporação dos territórios poloneses pela Alemanha perdidos pelos alemães durante o Tratado de Versalhes em 1919.</p>',
            'alternativeD' =>
                '<p>A derrota russa pelos alemães no ano de 1942 na Batalha de Stalingrado.</p>',
            'alternativeE' =>
                '<p>Os acordos de solidariedade com a Inglaterra na chamada Carta do Atlântico e os ataques japoneses à base de Pearl Harbor.</p>',
            'correctAlternative' => 'e',

            'subject_id' => 4
        ]);
        $user2->myQuestions()->attach($question->id, ['relation' => 'owner']);
    }
}
