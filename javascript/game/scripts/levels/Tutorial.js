define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","Scores_data"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function g(){v?d.getFlag("conversar_recepcionista").getValue()==1&&(u.closeDialog(0),u.closeDialog(1),u.changeScene(1)):(u.closeDialog(0),u.closeDialog(1),u.changeScene(1))}function y(){u.openDialog(0)}function w(){v?d.getFlag("conversar_mentor").getValue()==1&&u.changeScene(2):u.changeScene(2)}function S(){u.changeScene(4)}var p=require("Dialogs_data").tutorial,d=new r("Level Tutorial"),v=!0,m=!1;v||(m=!0);var b=a.scenes.recepcao.getClone().onLoad(function(){u.openDialog(0)});b.registerDialogs([(new i(a.characters.recepcionista_unknow)).setText(p.recepcao[0]).registerOption("",function(){d.getFlag("conversar_recepcionista").setValue(!0),u.openDialog(1)}),(new i(a.characters.jogador)).setText("").registerOption(p.recepcao[1],function(){u.openDialog(2)}),(new i(a.characters.recepcionista)).setText(p.recepcao[2]).registerOption("",function(){u.closeDialog(3),u.setInteractiveObjectVisible("io-ir_corredor_esquerda",!0),u.setInteractiveObjectVisible("io-ir_corredor_direita",!0)})]),b.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(y),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left").onClick(g).setVisibility(m),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right").onClick(g).setVisibility(m)]);var E=a.scenes.corredor.getClone().onLoad(function(){switch(d.getFlag("passagem_corredor").getValue()){case 0:u.setInteractiveObjectVisible("io-conversar_mentor",!0),u.openDialog(0);break;case 1:u.setInteractiveObjectVisible("io-ir_posto_enfermagem",!0),u.setInteractiveObjectVisible("io-ir_sala_leitos",!1),u.setInteractiveObjectVisible("io-conversar_mentor",!1);break;case 2:u.setInteractiveObjectVisible("io-ir_posto_enfermagem",!1),u.setInteractiveObjectVisible("io-ir_sala_leitos",!0)}}).onUnload(function(){switch(d.getFlag("passagem_corredor").getValue()){case 0:d.getFlag("passagem_corredor").setValue(1);break;case 1:d.getFlag("passagem_corredor").setValue(2);break;case 2:d.getFlag("passagem_corredor").setValue(3)}});E.registerDialogs([(new i(a.characters.mentor)).setText(p.corredor[0]).registerOption("",function(){d.getFlag("conversar_mentor").setValue(!0),u.openDialog(1)}),(new i(a.characters.jogador)).setText("").registerOption(p.corredor[1],function(){d.getFlag("conversar_mentor").setValue(!0),u.openDialog(4)}).registerOption(p.corredor[2],function(){d.getFlag("conversar_mentor").setValue(!0),u.openDialog(2)}).registerOption(p.corredor[4],function(){d.getFlag("conversar_mentor").setValue(!0),u.openDialog(3)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.corredor[3]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.mentor)).setText(p.corredor[5]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.mentor)).setText(p.corredor[6]).registerOption("",function(){u.closeDialog(4),u.setInteractiveObjectVisible("io-ir_sala_leitos",!0),u.setInteractiveObjectVisible("io-conversar_mentor",!0)})]),E.registerInteractiveObjects([(new s("io-ir_sala_leitos","Ir para a sala de Leitos Masculino")).setCssClass("intObj-goToBedroom").onClick(w).setVisibility(m),(new s("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")).setCssClass("intObj-goToNursingStation").onClick(S).setVisibility(m),(new s("io-conversar_mentor","Conversar com Mentor")).setCssClass("intObj-talkToMentor").onClick(function(){u.openDialog(0)}).setVisibility(m)]);var x=(new t("sala_de_leitos","scene-sala_de_leitos")).setCssClass("scene-bedroom").onLoad(function(){switch(d.getFlag("passagem_sala-de-leitos").getValue()){case 0:u.setInteractiveObjectVisible("io-ir_leito",!0),u.setInteractiveObjectVisible("io-ir_corredor",!1);break;case 1:u.setInteractiveObjectVisible("io-ir_leito",!1),u.setInteractiveObjectVisible("io-ir_corredor",!0)}}).onUnload(function(){switch(d.getFlag("passagem_sala-de-leitos").getValue()){case 0:d.getFlag("passagem_sala-de-leitos").setValue(1);break;case 1:d.getFlag("passagem_sala-de-leitos").setValue(0)}});x.registerInteractiveObjects([(new s("io-ir_leito","Ir ao leito")).setCssClass("intObj-ir_leito-tutorial").onClick(function(){u.changeScene(3)}).setVisibility(m),(new s("io-ir_corredor","Ir ao Corredor")).setCssClass("intObj-bedroomToHallway").onClick(function(){u.changeScene(1)}).setVisibility(m)]);var T=a.scenes.leitos.joao.getClone().onLoad(function(){u.setInteractiveObjectVisible("io-pulseira_paciente",!0);switch(d.getFlag("visita-leito").getValue()){case 0:u.openDialog(0);break;case 1:u.setActionVisible("btn-ir_sala_leitos",!1),u.openDialog(11),d.getFlag("termometro").setValue(!1),d.getFlag("medidor-pressao").setValue(!1),d.getFlag("oximetro").setValue(!1),d.getFlag("relogio").setValue(!1)}}).onUnload(function(){d.getFlag("visita-leito").setValue(1),u.closeCommandBar()});T.registerDialogs([(new i(a.characters.mentor)).setText(p.leito.conversa1[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText("").registerOption(p.leito.conversa1[1],function(){u.openDialog(4)}).registerOption(p.leito.conversa1[2],function(){u.openDialog(2)}).registerOption(p.leito.conversa1[4],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.leito.conversa1[3]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.mentor)).setText(p.leito.conversa1[5]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.joao)).setText(p.leito.conversa1[6]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.jogador)).setText("").registerOption(p.leito.conversa1[7],function(){u.openDialog(8)}).registerOption(p.leito.conversa1[8],function(){u.openDialog(6)}).registerOption(p.leito.conversa1[10],function(){u.openDialog(7)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.leito.conversa1[9]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.mentor)).setText(p.leito.conversa1[11]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.pacientes.joao)).setText(p.leito.conversa1[12]).registerOption("",function(){u.openDialog(9)}),(new i(a.characters.jogador)).setText("").registerOption(p.leito.conversa1[13],function(){u.openDialog(10)}),(new i(a.characters.mentor)).setText(p.leito.conversa1[14]).registerOption("",function(){u.closeDialog(10),u.openCommandBar()}),(new i(a.characters.jogador)).setText("").registerOption(p.leito.conversa2[0],function(){u.openDialog(14)}).registerOption(p.leito.conversa2[1],function(){u.openDialog(12)}).registerOption(p.leito.conversa2[3],function(){u.openDialog(13)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.leito.conversa2[2]).registerOption("",function(){u.openDialog(11)}),(new i(a.characters.mentor)).setText(p.leito.conversa2[4]).registerOption("",function(){u.openDialog(11)}),(new i(a.characters.pacientes.joao)).setText(p.leito.conversa2[5]).registerOption("",function(){u.openDialog(15)}),(new i(a.characters.jogador)).setText("").registerOption(p.leito.conversa2[6],function(){u.openDialog(16)}),(new i(a.characters.mentor)).setText(p.leito.conversa2[7]).registerOption("",function(){u.closeDialog(16),u.setActionVisible("btn-lavar_maos",!0),u.openCommandBar()}),(new i(a.characters.mentor)).setText(p.leito.pulseira_incorreta).registerOption("",function(){u.closeDialog(),u.openCommandBar()}),(new i(a.characters.jogador)).setText(p.leito.perguntarNome).registerOption("",function(){u.openDialog(19)}),(new i(a.characters.pacientes.joao)).setText(p.leito.conversa1[12]).registerOption("",function(){u.closeDialog(9),u.openCommandBar()})]),T.registerInteractiveObjects([(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_01-checar_pulseira").onClick(function(){u.openModalScene("pulseira"),f.open(),u.openCommandBar(),d.getFlag("pulseira").getValue()==0&&u.setInteractiveObjectVisible("io-confirmar_pulseira",!0)}).setVisibility(m)]),T.registerActions([(new n("btn-ir_sala_leitos","Ir para sala de leitos")).setCssClass("action-ir_sala_de_leitos").onClick(function(){f.isAllDataValid()?(u.registerScoreItem(h.tutorial.identificarPaciente),u.setActionVisible("btn-perguntar_nome_do_paciente",!1),u.changeScene(2),f.disable()):(u.closeCommandBar(),u.openDialog(17))}).setVisibility(m),(new n("btn-perguntar_nome_do_paciente","Perguntar nome do paciente")).setCssClass("action-perguntar_nome_char1").onClick(function(){u.openDialog(18),u.closeCommandBar()}).setVisibility(!0),(new n("btn-lavar_maos","Lavar as mãos")).setCssClass("action-lavar_maos").onClick(function(){switch(d.getFlag("lavar-maos").getValue()){case 0:d.getFlag("lavar-maos").setValue(1),u.registerScoreItem(h.tutorial.lavarMaosAntes),u.setActionVisible("btn-frequencia_respiratoria",!0),u.setActionVisible("btn-medir_pulso",!0),u.setActionVisible("btn-medir_temperatura",!0),u.setActionVisible("btn-saturacao_02",!0),u.setActionVisible("btn-ler_prontuario",!0);break;case 2:d.getFlag("lavar-maos").setValue(3),u.registerScoreItem(h.tutorial.lavarMaosDepois),u.setActionVisible("btn-lavar_maos",!1),u.setActionVisible("btn-ler_prontuario",!0)}}).setVisibility(m),(new n("btn-medir_temperatura","Ver temperatura")).setCssClass("action-medir_temperatura").onClick(function(){d.getFlag("lavar-maos").getValue()>=1&&(u.openModalScene("modalTermometro"),d.getFlag("termometro").setValue(!0),u.registerScoreItem(h.tutorial.verTemperatura),d.getFlag("oximetro").getValue()==1&&d.getFlag("medidor-pressao").getValue()==1&&d.getFlag("relogio").getValue()==1&&(u.setActionVisible("btn-lavar_maos",!0),d.getFlag("lavar-maos").setValue(2)))}).setVisibility(m),(new n("btn-medir_pulso","Ver pressão")).setCssClass("action-medir_pulso").onClick(function(){d.getFlag("lavar-maos").getValue()>=1&&(u.openModalScene("modalMedidor_pressao"),d.getFlag("medidor-pressao").setValue(!0),u.registerScoreItem(h.tutorial.verPressao),d.getFlag("termometro").getValue()==1&&d.getFlag("oximetro").getValue()==1&&d.getFlag("relogio").getValue()==1&&(u.setActionVisible("btn-lavar_maos",!0),d.getFlag("lavar-maos").setValue(2)))}).setVisibility(m),(new n("btn-saturacao_02","Ver saturação de O2")).setCssClass("action-medir_saturacao_02").onClick(function(){d.getFlag("lavar-maos").getValue()>=1&&(u.openModalScene("modalOximetro"),d.getFlag("oximetro").setValue(!0),u.registerScoreItem(h.tutorial.verSaturacao),d.getFlag("termometro").getValue()==1&&d.getFlag("medidor-pressao").getValue()==1&&d.getFlag("relogio").getValue()==1&&(u.setActionVisible("btn-lavar_maos",!0),d.getFlag("lavar-maos").setValue(2)))}).setVisibility(m),(new n("btn-frequencia_respiratoria","Ver frequência respiratória")).setCssClass("action-medir_freq_respiratoria").onClick(function(){d.getFlag("lavar-maos").getValue()>=1&&(d.getFlag("relogio").setValue(!0),u.registerScoreItem(h.tutorial.verFrequenciaRespiratoria),c.open(),u.openModalScene("freqRespiratoria"))}).setVisibility(m),(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){l.open(),u.openModalScene("Prontuario")}).setVisibility(m)]);var N=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){u.setInteractiveObjectVisible("io-abrir_gaveta",!0)}).onUnload(function(){u.closeCommandBar()});N.registerInteractiveObjects([(new s("io-abrir_gaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){u.openModalScene("Gaveta"),u.openCommandBar(),u.setActionVisible("btn-fechar_gaveta",!0),d.getFlag("termometro").getValue()!=1&&u.setInteractiveObjectVisible("io-termometro",!0),d.getFlag("medidor-pressao").getValue()!=1&&u.setInteractiveObjectVisible("io-medidor_pressao",!0),d.getFlag("oximetro").getValue()!=1&&u.setInteractiveObjectVisible("io-oximetro",!0),d.getFlag("relogio").getValue()!=1&&u.setInteractiveObjectVisible("io-relogio",!0)}).setVisibility(m)]),N.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.changeScene(1)}).setVisibility(m)]);var C=a.scenes.finalDeFase.getClone().onLoad(function(){u.setActionVisible("btn-proxima_fase",!0)});C.registerActions([(new n("btn-proxima_fase","Ir a recepção")).setCssClass("action-ir_recepcao").onClick(function(){u.changeLevelTo(1)}).setVisibility(m)]);var k=(new t("Gaveta","Gaveta")).setCssClass("modalScene-drawer");k.registerActions([(new n("btn-fechar_gaveta","Fechar gaveta")).setCssClass("action-fechar_gaveta").onClick(function(){u.closeModalScene("Gaveta"),d.getFlag("termometro").getValue()==1&&d.getFlag("oximetro").getValue()==1&&d.getFlag("medidor-pressao").getValue()==1&&d.getFlag("relogio").getValue()==1&&(u.setActionVisible("btn-ir_corredor",!0),u.openCommandBar())}).setVisibility(m)]),k.registerInteractiveObjects([(new s("io-termometro","Termômetro")).setCssClass("intObj-thermometer").onClick(function(){u.registerScoreItem(h.tutorial.pegarTermometro),u.setInteractiveObjectVisible("io-termometro",!1),d.getFlag("termometro").setValue(!0)}).setVisibility(m),(new s("io-medidor_pressao","Medidor de pressão")).setCssClass("intObj-bloodPressureMonitor").onClick(function(){u.registerScoreItem(h.tutorial.pegarAparelhoPressao),u.setInteractiveObjectVisible("io-medidor_pressao",!1),d.getFlag("medidor-pressao").setValue(!0)}).setVisibility(m),(new s("io-oximetro","Oxímetro")).setCssClass("intObj-oximeter").onClick(function(){u.registerScoreItem(h.tutorial.pegarOximetro),u.setInteractiveObjectVisible("io-oximetro",!1),d.getFlag("oximetro").setValue(!0)}).setVisibility(m),(new s("io-relogio","Relógio")).setCssClass("intObj-watch").onClick(function(){u.registerScoreItem(h.tutorial.pegarRelogio),u.setInteractiveObjectVisible("io-relogio",!1),d.getFlag("relogio").setValue(!0)}).setVisibility(m)]);var L=new t("Prontuario","modalScene-prontuario_joao");L.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){l.close(),u.closeModalScene("Prontuario")}),(new n("btn-terminar_fase","Conversar com Mentor")).setCssClass("action-abrir_dialogo").onClick(function(){l.close(),u.closeCommandBar(),u.showEndOfLevel(),u.unlockLevel(1)})]);var A=new t("pulseira","pulseira");A.registerInteractiveObjects([]),A.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){u.closeModalScene("Pulseira"),d.getFlag("visita-leito").getValue()==0&&u.setActionVisible("btn-ir_sala_leitos",!0),f.close()}).setVisibility(!0)]);var O=(new t("modalTermometro","modalTermometro")).setCssClass("modalScene-termometro").setTemplate("<span class='temp_termometro'>37.5º</span>");O.registerActions([(new n("btn-largar_termometro","Fechar termômetro")).setCssClass("action-largar_termometro").onClick(function(){u.closeModalScene("modalTermometro")}).setVisibility(!0)]);var M=(new t("modalMedidor_pressao","modalMedidor_pressao")).setCssClass("modalScene-medidor_pressao").setTemplate("<span class='pressao'>160x100 mmHg</span>");M.registerActions([(new n("btn-largar_medidor_pressao","Fechar medidor de pressão")).setCssClass("action-largar_medidor_pressao").onClick(function(){u.closeModalScene("modalMedidor_pressao")}).setVisibility(!0)]);var _=(new t("modalOximetro","Oxímetro")).setCssClass("modalScene-oximetro").setTemplate("<span class='oximetro-st-text'>94% Sat.O2</span><span class='oximetro-fc-text'>65 bpm</span>");_.registerActions([(new n("btn-largar_oximetro","Fechar Oxímetro")).setCssClass("action-largar_oximetro").onClick(function(){u.closeModalScene("modalOximetro")}).setVisibility(!0)]);var D=(new t("freqRespiratoria","Frequência Respiratória")).setCssClass("modalScene-freqRespiratoria");D.registerActions([(new n("btn-largar_relogio","Fechar Relógio")).setCssClass("action-largar_relogio").onClick(function(){c.close(),u.closeModalScene("freqRespiratoria")}).setVisibility(!0)]),d.setSetupScript(function(){d.getFlag("conversar_recepcionista").setValue(!1),d.getFlag("conversar_mentor").setValue(!1),d.getFlag("passagem_corredor").setValue(0),d.getFlag("passagem_sala-de-leitos").setValue(0),d.getFlag("visita-leito").setValue(0),d.getFlag("pulseira").setValue(!1),d.getFlag("lavar-maos").setValue(0),d.getFlag("termometro").setValue(!1),d.getFlag("medidor-pressao").setValue(!1),d.getFlag("oximetro").setValue(!1),d.getFlag("relogio").setValue(!1),f.setNameRegExp(/João Manoel Ribeiro/),f.setLeitoRegExp(/0*2/),f.setDataRegExp(/07\/06\/1956/),l.setNome("João Manoel Ribeiro"),l.setSexo("M"),l.setEstadoCivil("Casado"),l.setDataNascimento("07/06/1956"),l.setIdade("58 anos"),l.setProfissao("Comerciante"),l.setPai("Joaquim Casagrande"),l.setMae("Lúcia Moraes Casagrande"),l.setAlergiaMedicamentosa(!0,"Dipirona"),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("13/05/2015"),l.setLeito("02 - Leito Masculino"),l.setAntecedentes("Ocorrência de internação em 2004, devido a suspeita de infarto agudo do miocárdio (IAM)"),l.setHipotese("Crise hipertensiva"),l.setObservacoes(""),l.setPeso("87"),l.setAltura("1,62"),l.setCircunferenciaAbdominal("115"),l.setPrescMedicaRowData(0,"15/03","Captopril","Oral","comp 75 mg","2x dia",""),l.setPrescMedicaRowData(1,"15/03","Ácido acetilsalicílico (AAS)","Oral","comp 100 mg","1x dia",""),l.setSsvvRowData(0,"15/03","","","","","",!1),l.setSsvvRowData(1,"","","","","","",!0),l.setAnotacaoEnfermagemRowData("15/03","")}),d.registerScene(b),d.registerScene(E),d.registerScene(x),d.registerScene(T),d.registerScene(N),d.registerScene(C),d.registerModalScene(A),d.registerModalScene(L),d.registerModalScene(D),d.registerModalScene(k),d.registerModalScene(O),d.registerModalScene(M),d.registerModalScene(_),d.registerFlag(new o("conversar_recepcionista"),!1),d.registerFlag(new o("conversar_mentor",!1)),d.registerFlag(new o("passagem_corredor",0)),d.registerFlag(new o("passagem_sala-de-leitos",0)),d.registerFlag(new o("visita-leito",0)),d.registerFlag(new o("pulseira",!1)),d.registerFlag(new o("lavar-maos",0)),d.registerFlag(new o("termometro",!1)),d.registerFlag(new o("medidor-pressao",!1)),d.registerFlag(new o("oximetro",!1)),d.registerFlag(new o("relogio",!1)),d.setInitialScene(0),e.registerLevel(d,0)});