import styles from '../styles/Table.module.css';

export default function Table() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Категория</td>
                        <td colSpan="2">Акция "Paws and Claws"</td>
                        <td>Бесплатная доставка</td>
                        <td>Скидка 10%</td>
                    </tr>
                    <tr>
                        <td>Корм</td>
                        <td>Сухой корм</td>
                        <td>Влажный корм</td>
                        <td>Лакомства</td>
                        <td>Витамины</td>
                    </tr>
                    <tr>
                        <td>Игрушки</td>
                        <td>Мячики</td>
                        <td>Мышки</td>
                        <td>Когтеточки</td>
                        <td>Дразнилки</td>
                    </tr>
                    <tr>
                        <td>Уход</td>
                        <td>Шампуни</td>
                        <td>Расчески</td>
                        <td colSpan="3">Зубные щетки и пасты</td>
                    </tr>
                    <tr>
                        <td>Аксессуары</td>
                        <td colSpan="3">Ошейники, поводки, шлейки</td>
                        <td>Миски</td>
                    </tr>
                    <tr>
                        <td>Клетки</td>
                        <td>Переноски</td>
                        <td>Лежанки</td>
                        <td>Домики</td>
                        <td>Когтеточки</td>
                    </tr>
                    <tr>
                        <td colSpan="5">"ПРЕДОСТАВЛЕНИЕ ВЫСОКОКАЧЕСТВЕННЫХ ТОВАРОВ ДЛЯ ДОМАШНИХ ЖИВОТНЫХ" <br />Для заказов звоните: 985-245-1730</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}