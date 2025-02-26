# Aulinha

![](https://img.shields.io/github/stars/abraaoteixeira/progJS-1) ![](https://img.shields.io/github/forks/abraaoteixeira/progJS-1) ![](https://img.shields.io/github/tag/abraaoteixeira/progJS-1) ![](https://img.shields.io/github/release/abraaoteixeira/progJS-1) ![](https://img.shields.io/github/issues/abraaoteixeira/progJS-1)

## Boleanos

    console.log('Situações que retornam verdadeiro: ');
    console.log('"String vazia": ',!!"");
    console.log('"String com um espaço apenas": ',!! " ");
    console.log('String com varios espaços: ',!! "     ");
    console.log('3: ',!!3);
    console.log('-1: ',!!-1);
    console.log('Atenção à precendência de operadores'); // é como na matemática
    console.log('!!5+5: ',!!5+5); //retorna 6
    console.log('5+5: ', !!(5+5)); //retorna true
    console.log('5-5: ', !!(5-5)); //retorna 4
    console.log('5-5 retorna : ' ,!!(5-5)); //retorna false, 5-0=0
    console.log(' : ', !!'');
    console.log('{}: ', !!{});
    console.log('[] : ', !![]);
    console.log('infinity: ',!!Infinity);
    console.log('- infinity: ',!!-Infinity);
    console.log('infinity-infinity: ',!!(Infinity-Infinity));
    console.log('Situações que retornam falso: ');
    console.log('5-5: ',!!(5-5)); //retorna false
    console.log('5-5: ',(!!5)-5); //retorna -5. Primeiro gera 1, depois subtrai 5
    console.log('vazia: ',!!"");
    console.log('Nan: ', !!NaN);
    console.log('undefined: ',!!undefined);
    console.log('null: ',!!null);
    console.log('Exercício');
    console.log('!7',!7);//false
    console.log('!!7',!!7);//true
    console.log('!!7-7',!!7-7);//true
    console.log('!!(7-7)',!!(7-7));//true
    console.log('!!7-7',!(7-7));//true

## Instructions for Setting Up and Running the Backend and Frontend

### Backend

1. Install dependencies:
    ```
    cd backend
    npm install
    ```

2. Start the server:
    ```
    npm start
    ```

### Frontend

1. Install dependencies:
    ```
    cd frontend
    npm install
    ```

2. Start the development server:
    ```
    npm start
    ```

## How to Use the Platform

1. Open the frontend in your browser.
2. On the homepage, you can input text or select predefined concepts about computer networks.
3. Click "Process Text" to generate relevant visualizations.
4. Navigate to the "Topics" page to explore predefined topics.
5. Click on a topic to view detailed explanations and related visualizations.
6. Use the "Export" button to save diagrams and explanations as PDF or image.
