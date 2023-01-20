---
layout: documentation
permalink: /formacion/laboratorios/transformacion-coordenadas-wgs84
title: "Transformación de coordenadas MAGNA-SIRGAS a coordenadas decimales en WGS84"
description: "Objetivo: Transformar coordenadas proyectadas con el datum MAGNA - SIRGAS al formato de  coordenadas decimales utilizadas en el estándar Darwin Core  para la publicación de datos sobre biodiversidad."
sideNavigation: sidenav_laboratorios.terms
toc: true
---

# Transformación de coordenadas MAGNA-SIRGAS a coordenadas decimales en WGS84

## Objetivo

Transformar coordenadas proyectadas con el datum MAGNA - SIRGAS  al formato de  coordenadas decimales utilizadas en el estándar Darwin Core  para la publicación de datos sobre biodiversidad.

## Introducción

Las coordenadas se pueden tomar en diferentes Sistemas de Referencia de Coordenadas (SRC), utilizando distintos datums para representar la superficie de la tierra. En el caso de Colombia, se utiliza el datum nacional (MAGNA-SIRGA) para la proyección de las coordenadas. Sin embargo, para facilitar la interoperabilidad de los datos sobre biodiversidad, en el  estándar Darwin Core (DwC) las coordenadas deben ser transformadas a coordenadas decimales  con datum WGS84. Este proceso se puede realizar masivamente con la ayuda de software especializados en datos geográficos. 

En este laboratorio, se explica paso a paso el proceso de transformación de coordenadas  a partir de un archivo shapefile tipo punto.

## Sobre la herramienta

QGIS es un software de gestión de información geográfica que se ejecuta en múltiples sistemas operativos como Linux, Unix, Mac OSX, Windows y Android. También soporta numerosos formatos y funcionalidades de datos vector, datos ráster y bases de datos. Esta herramienta proporciona una creciente gama de servicios, a través de sus funciones básicas y complementos, para visualizar, gestionar, editar, analizar datos y diseñar mapas imprimibles.
QGIS es un software libre y de código abierto, licenciado bajo una GNU (General Public License) y soportado como un proyecto de la Open Source Geospatial Foundation (OSGeo). Por lo tanto, no requiere el pago de licencias. Adicionalmente, es impulsado por un grupo de voluntarios que mantienen el software actualizado y las versiones estables, lo cual sostiene a QGIS como uno de los software geográficos más reconocidos.
