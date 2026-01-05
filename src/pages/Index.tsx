import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Box',
      title: 'Металлоконструкции',
      description: 'Изготовление конструкций любой сложности для зданий и сооружений'
    },
    {
      icon: 'Scissors',
      title: 'Лазерная резка',
      description: 'Высокоточная лазерная резка металла на современном оборудовании'
    },
    {
      icon: 'Move',
      title: 'Гибка металла',
      description: 'Услуги гибки металлических заготовок на листогибе с ЧПУ'
    },
    {
      icon: 'RotateCw',
      title: 'Вальцовка металла',
      description: 'Вальцовка металлических листов для изготовления цилиндрических изделий'
    },
    {
      icon: 'Container',
      title: 'Ёмкости',
      description: 'Изготовление ёмкостей различного назначения и объёма'
    }
  ];

  const equipment = [
    {
      name: 'Лазерный комплекс',
      power: '6 кВт',
      area: '3000×1500 мм'
    },
    {
      name: 'Листогиб с ЧПУ',
      power: '320 тонн',
      area: '4000 мм'
    },
    {
      name: 'Вальцовочный станок',
      power: '3-вальцовый',
      area: 'до 3000 мм'
    },
    {
      name: 'Сварочные роботы',
      power: 'TIG/MIG',
      area: 'до 6 метров'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Каркас торгового центра',
      category: 'Металлоконструкции',
      image: 'https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/3ca58561-bdd2-4c16-bb21-e2742e666e91.jpg',
      weight: '45 тонн'
    },
    {
      id: 2,
      title: 'Производственный цех',
      category: 'Металлоконструкции',
      image: 'https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/8e2e50ce-a00d-45c2-907e-51d9b08ab8f6.jpg',
      weight: '120 тонн'
    },
    {
      id: 3,
      title: 'Декоративные элементы',
      category: 'Лазерная резка',
      image: 'https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/95682018-e08a-46d4-8715-ef481aa38e65.jpg',
      weight: '2 тонны'
    },
    {
      id: 4,
      title: 'Резервуары для предприятия',
      category: 'Ёмкости',
      image: 'https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/8e2e50ce-a00d-45c2-907e-51d9b08ab8f6.jpg',
      weight: '15 тонн'
    },
    {
      id: 5,
      title: 'Фасадные конструкции',
      category: 'Гибка металла',
      image: 'https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/3ca58561-bdd2-4c16-bb21-e2742e666e91.jpg',
      weight: '8 тонн'
    },
    {
      id: 6,
      title: 'Ангарный комплекс',
      category: 'Металлоконструкции',
      image: 'https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/8e2e50ce-a00d-45c2-907e-51d9b08ab8f6.jpg',
      weight: '95 тонн'
    }
  ];

  const categories = ['Все', 'Металлоконструкции', 'Лазерная резка', 'Гибка металла', 'Ёмкости'];

  const filteredProjects = activeFilter === 'Все' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={32} className="text-primary" />
              <span className="text-2xl font-bold">МеталлПром</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'production', label: 'Производство' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'equipment', label: 'Оборудование' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Заказать расчёт
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Металлоконструкции <span className="text-primary">любой сложности</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современное производство с полным циклом изготовления металлоконструкций для промышленных и гражданских объектов
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline">
                  Наши проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">качество</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/8e2e50ce-a00d-45c2-907e-51d9b08ab8f6.jpg"
                alt="Производство"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Работаем круглосуточно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground">
              Мы специализируемся на производстве металлоконструкций с 2009 года. 
              Наше предприятие оснащено современным оборудованием и укомплектовано 
              высококвалифицированными специалистами.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Award', title: 'Сертификаты', text: 'ISO 9001:2015' },
              { icon: 'Users', title: 'Команда', text: '50+ специалистов' },
              { icon: 'CheckCircle', title: 'Гарантия', text: 'До 5 лет' },
              { icon: 'TrendingUp', title: 'Опыт', text: '15+ лет' }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name={item.icon} size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Производство полного цикла</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Наш производственный комплекс площадью 5000 м² оснащён современным оборудованием 
                ведущих мировых производителей.
              </p>
              <div className="space-y-4">
                {[
                  'Проектирование и расчёт конструкций',
                  'Лазерная резка металла толщиной до 20 мм',
                  'Гибка на листогибах с ЧПУ',
                  'Сварочные работы (TIG, MIG, MAG)',
                  'Порошковая покраска',
                  'Монтаж на объекте'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/c5a00030-2e2f-4bd4-bd81-dd1dd65ca6ff/files/95682018-e08a-46d4-8715-ef481aa38e65.jpg"
                alt="Производство"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Портфолио проектов</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                onClick={() => setActiveFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Weight" size={16} />
                    <span className="text-sm">{project.weight}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Наше оборудование</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <Icon name="Settings" size={64} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Zap" size={16} />
                    <span>Мощность: {item.power}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Maximize" size={16} />
                    <span>Размер: {item.area}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес производства</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Промышленная, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@metallprom.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00<br />Сб-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Заказать расчёт</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Описание проекта"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 МеталлПром. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;