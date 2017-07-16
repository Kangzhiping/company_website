var Index = require('../controller/web/index');

module.exports = function(app) {
  //��ҳ
  app.get('/', Index.index);
  
  app.get('/first', Index.first);  

  //�߽���Э
  app.get('/company_intro', Index.company_intro);
  app.get('/culture', Index.culture);
  app.get('/organize', Index.organize);
  app.get('/process', Index.process);

  //��������
  app.get('/company_dynamic', Index.company_dynamic);
  app.get('/media_report', Index.media_report);
  app.get('/activity_report', Index.activity_report);

  //��������
  app.get('/services1', Index.services1);
  app.get('/services2', Index.services2);
  app.get('/services3', Index.services3);

  //�������
  app.get('/partner', Index.partner);

  //������Դ
  app.get('/recruit', Index.recruit);
  app.get('/benefits', Index.benefits);
  app.get('/staff_style', Index.staff_style);
  app.get('/quit_notice', Index.quit_notice);

  //��ϵ����
  app.get('/contact_us', Index.contact_us);

  //��ҳ��ȡ����
  app.get('/web/get_news', Index.get_news);
  //��ҳ��ȡ��Ƹ��Ϣ
  app.get('/web/get_recruits', Index.get_recruits);
  //�����ȡ����
  app.post('/web/get_news_by_Category', Index.get_news_by_Category);

  //��ȡ��˾��̬
  app.get('/news_detail/:id', Index.get_news_detail);
  //��ȡ��˾��̬
  app.post('/news_detail/:id', Index.post_news_detail);
  //��ȡý�屨��
  app.get('/media_report_detail/:id', Index.get_media_report_detail);
  //��ȡý�屨��
  app.post('/media_report_detail/:id', Index.post_media_report_detail);
  //��ȡ�����
  app.get('/activity_report_detail/:id', Index.get_activity_report_detail);
  //��ȡ�����
  app.post('/activity_report_detail/:id', Index.post_activity_report_detail);

  //������Դҳ��
  //��ҳ��ȡ��Ƹ��Ϣ
  app.post('/web/get_recruits_page', Index.get_recruits_page);
  //��ҳ��ȡ��ְ��Ϣ
  app.post('/web/get_quit_page', Index.get_quit_page);

  //��ת����Ƹ����ҳ��
  app.get('/recruit_requirment/:id', Index.get_recruit_requirment);
  //��ȡ��Ƹ������Ϣ
  app.post('/recruit_requirment/:id', Index.post_recruit_requirment);


  //�û���ӷ�����Ϣ
  app.post('/post_feedback', Index.post_feedback);
  
  app.get('/web/get_detail', Index.get_detail);
  
  app.get('/web/get_subjects', Index.get_subjects);
  
  app.get('/web/get_classes/:subject', Index.get_classes);	
  
  app.get('/web/get_majors/:_class', Index.get_majors);
  
};